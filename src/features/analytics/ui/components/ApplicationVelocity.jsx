import { MoreVertical } from "lucide-react";

const ApplicationVelocity = ({ velocityData = [] }) => {
  const maxCount = Math.max(...velocityData.map((w) => w.count), 1);
  // Ceil to next nice number for Y-axis
  const yMax = Math.ceil(maxCount / 5) * 5 || 5;
  const ySteps = [yMax, Math.round(yMax * 0.75), Math.round(yMax * 0.5), Math.round(yMax * 0.25), 0];

  // Build SVG polyline points (200-high canvas, 500-wide)
  const svgWidth = 500;
  const svgHeight = 200;
  const points = velocityData.map((w, i) => {
    const x = (i / (velocityData.length - 1 || 1)) * svgWidth;
    const y = svgHeight - (w.count / yMax) * svgHeight;
    return `${x},${y}`;
  });

  const linePath = points.length > 1 ? `M${points.join(" L")}` : "";
  const fillPath =
    points.length > 1
      ? `M${points[0].split(",")[0]},${svgHeight} L${points.join(
          " L"
        )} L${points[points.length - 1].split(",")[0]},${svgHeight} Z`
      : "";

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Application Velocity
          </h3>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Applications submitted per week (last 8 weeks)
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>

      {velocityData.length === 0 || velocityData.every((w) => w.count === 0) ? (
        <div className="h-56 flex flex-col items-center justify-center text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          <p className="mt-3 text-sm font-medium">No application data yet</p>
          <p className="text-xs mt-1">Add applications to see velocity trends</p>
        </div>
      ) : (
        <div className="relative h-56 w-full mt-2">
          {/* Y-axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-gray-400 pb-6">
            {ySteps.map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>

          {/* Grid Lines */}
          <div className="absolute left-6 right-0 top-2 bottom-6 flex flex-col justify-between z-0">
            {ySteps.map((v) => (
              <div key={v} className="border-b border-gray-100 w-full" />
            ))}
          </div>

          {/* SVG Area Chart */}
          <div className="absolute left-6 right-0 top-2 bottom-6 z-10">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="velocity-gradient"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Gradient Fill */}
              {fillPath && (
                <path d={fillPath} fill="url(#velocity-gradient)" />
              )}
              {/* Line */}
              {linePath && (
                <path
                  d={linePath}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              )}
              {/* Dots */}
              {velocityData.map((w, i) => {
                const x = (i / (velocityData.length - 1 || 1)) * svgWidth;
                const y = svgHeight - (w.count / yMax) * svgHeight;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="5"
                    fill="white"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>
          </div>

          {/* X-axis Labels */}
          <div className="absolute left-6 right-0 bottom-0 flex justify-between text-[11px] text-gray-400 px-1">
            {velocityData.map((w) => (
              <span key={w.label}>{w.label}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationVelocity;
