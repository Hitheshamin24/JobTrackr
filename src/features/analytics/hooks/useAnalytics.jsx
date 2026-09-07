import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useAnalyticsHooks = () => {
  const { applications } = useSelector((state) => state.applications);

  // ─── Helper ──────────────────────────────────────────────────────────────────
  const safePercent = (numerator, denominator) =>
    denominator === 0 ? 0 : Math.round((numerator / denominator) * 100);

  const percentChange = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  const getMonthRange = (monthOffset = 0) => {
    const today = new Date();
    const m = today.getMonth() + monthOffset;
    const y = today.getFullYear();
    return {
      start: new Date(y, m, 1, 0, 0, 0, 0),
      end: new Date(y, m + 1, 0, 23, 59, 59, 999),
    };
  };

  const inRange = (dateStr, start, end) => {
    const d = new Date(dateStr);
    return d >= start && d <= end;
  };

  // ─── Pre-computed memos ───────────────────────────────────────────────────────
  const total = applications.length;

  const byStatus = useMemo(() => {
    const map = { applied: 0, interviewing: 0, offer: 0, rejected: 0 };
    applications.forEach((a) => {
      const s = a.currentStatus?.toLowerCase();
      if (s in map) map[s]++;
    });
    return map;
  }, [applications]);

  // ─── Top Metrics ─────────────────────────────────────────────────────────────
  const metrics = useMemo(() => {
    const thisMonth = getMonthRange(0);
    const lastMonth = getMonthRange(-1);

    const thisMonthApps = applications.filter((a) =>
      inRange(a.applicationDate, thisMonth.start, thisMonth.end)
    ).length;
    const lastMonthApps = applications.filter((a) =>
      inRange(a.applicationDate, lastMonth.start, lastMonth.end)
    ).length;

    // Response rate = (interviewing + offer) / total
    const responded = byStatus.interviewing + byStatus.offer;
    const responseRate = safePercent(responded, total);

    // Compare response rate this month vs last month
    const thisMonthResponded = applications.filter(
      (a) =>
        inRange(a.applicationDate, thisMonth.start, thisMonth.end) &&
        (a.currentStatus === "interviewing" || a.currentStatus === "offer")
    ).length;
    const lastMonthResponded = applications.filter(
      (a) =>
        inRange(a.applicationDate, lastMonth.start, lastMonth.end) &&
        (a.currentStatus === "interviewing" || a.currentStatus === "offer")
    ).length;
    const thisMonthTotal = thisMonthApps || 1;
    const lastMonthTotal = lastMonthApps || 1;
    const thisMonthRR = safePercent(thisMonthResponded, thisMonthTotal);
    const lastMonthRR = safePercent(lastMonthResponded, lastMonthTotal);

    // Interview rate = interviewing / total
    const interviewRate = safePercent(byStatus.interviewing, total);

    // Offer rate = offer / total
    const offerRate = safePercent(byStatus.offer, total);

    return {
      totalApps: total,
      totalAppsDelta: percentChange(thisMonthApps, lastMonthApps),
      responseRate,
      responseRateDelta: percentChange(thisMonthRR, lastMonthRR),
      interviewRate,
      offerRate,
    };
  }, [applications, byStatus, total]);

  // ─── Application Velocity (last 8 weeks) ─────────────────────────────────────
  const velocityData = useMemo(() => {
    const weeks = [];
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    for (let i = 7; i >= 0; i--) {
      const end = new Date(today);
      end.setDate(today.getDate() - i * 7);
      const start = new Date(end);
      start.setDate(end.getDate() - 6);
      start.setHours(0, 0, 0, 0);

      const count = applications.filter((a) =>
        inRange(a.applicationDate, start, end)
      ).length;

      const label = `W${8 - i}`;
      weeks.push({ label, count });
    }
    return weeks;
  }, [applications]);

  // ─── Pipeline Status (donut) ──────────────────────────────────────────────────
  const pipelineData = useMemo(() => {
    const appliedPct = safePercent(byStatus.applied, total);
    const screeningPct = safePercent(byStatus.interviewing, total);
    const offerPct = safePercent(byStatus.offer, total);
    const rejectedPct = safePercent(byStatus.rejected, total);

    // Build conic-gradient string
    let cursor = 0;
    const segments = [
      { color: "#9ca3af", pct: appliedPct, label: "Applied" },
      { color: "#3b82f6", pct: screeningPct, label: "Interviewing" },
      { color: "#22c55e", pct: offerPct, label: "Offer" },
      { color: "#f87171", pct: rejectedPct, label: "Rejected" },
    ];

    const gradient = segments
      .map((s) => {
        const from = cursor;
        cursor += s.pct;
        return `${s.color} ${from}% ${cursor}%`;
      })
      .join(", ");

    return {
      conicGradient: `conic-gradient(from 0deg, ${gradient})`,
      segments,
      total,
    };
  }, [byStatus, total]);

  // ─── Role Categories ──────────────────────────────────────────────────────────
  const roleData = useMemo(() => {
    const counts = {};
    applications.forEach((a) => {
      const title = a.jobTitle?.trim() || "Other";
      counts[title] = (counts[title] || 0) + 1;
    });

    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const max = sorted[0]?.[1] || 1;
    return sorted.map(([title, count]) => ({
      title,
      count,
      percent: Math.round((count / max) * 100),
    }));
  }, [applications]);

  // ─── Top Locations ────────────────────────────────────────────────────────────
  const locationData = useMemo(() => {
    const counts = {};
    applications.forEach((a) => {
      const loc = a.location?.trim() || "Unknown";
      const type = a.locationType || "";
      if (!counts[loc]) counts[loc] = { count: 0, types: new Set() };
      counts[loc].count++;
      if (type) counts[loc].types.add(type);
    });

    const sorted = Object.entries(counts)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 3);

    return sorted.map(([location, data]) => ({
      location,
      count: data.count,
      percent: safePercent(data.count, total),
      types: [...data.types]
        .map((t) =>
          t === "remote" ? "Remote" : t === "hybrid" ? "Hybrid" : "On-site"
        )
        .join(" & "),
    }));
  }, [applications, total]);

  // ─── Job Type breakdown ───────────────────────────────────────────────────────
  const jobTypeData = useMemo(() => {
    const counts = { fulltime: 0, parttime: 0, contract: 0 };
    applications.forEach((a) => {
      const t = a.jobType?.toLowerCase();
      if (t in counts) counts[t]++;
    });
    return counts;
  }, [applications]);

  return {
    metrics,
    velocityData,
    pipelineData,
    roleData,
    locationData,
    jobTypeData,
    total,
  };
};
