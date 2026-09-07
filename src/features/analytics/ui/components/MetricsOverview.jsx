import {
  Briefcase,
  Inbox,
  Target,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

const StatBadge = ({ delta, label }) => {
  if (delta > 0)
    return (
      <div className="flex items-center text-xs text-green-500 font-medium">
        <TrendingUp size={14} className="mr-1" />
        <span>+{delta}% {label}</span>
      </div>
    );
  if (delta < 0)
    return (
      <div className="flex items-center text-xs text-red-400 font-medium">
        <TrendingDown size={14} className="mr-1" />
        <span>{delta}% {label}</span>
      </div>
    );
  return (
    <div className="flex items-center text-xs text-gray-400 font-medium">
      <Minus size={14} className="mr-1" />
      <span>No change</span>
    </div>
  );
};

const MetricsOverview = ({ metrics }) => {
  const {
    totalApps = 0,
    totalAppsDelta = 0,
    responseRate = 0,
    responseRateDelta = 0,
    interviewRate = 0,
    offerRate = 0,
  } = metrics || {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Applications */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Total Apps
          </h3>
          <div className="p-1.5 bg-blue-50 text-blue-500 rounded-lg">
            <Briefcase size={16} strokeWidth={2.5} />
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 mb-2">
          {totalApps}
        </div>
        <StatBadge delta={totalAppsDelta} label="this month" />
      </div>

      {/* Response Rate */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Response Rate
          </h3>
          <div className="p-1.5 bg-orange-50 text-orange-400 rounded-lg">
            <Inbox size={16} strokeWidth={2.5} />
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 mb-2">
          {responseRate}%
        </div>
        <StatBadge delta={responseRateDelta} label="vs last month" />
      </div>

      {/* Interview Rate */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Interview Rate
          </h3>
          <div className="p-1.5 bg-purple-50 text-purple-500 rounded-lg">
            <Target size={16} strokeWidth={2.5} />
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 mb-2">
          {interviewRate}%
        </div>
        <div className="flex items-center text-xs text-gray-400 font-medium">
          <span>of total applications</span>
        </div>
      </div>

      {/* Offer Rate */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Offer Rate
          </h3>
          <div className="p-1.5 bg-emerald-50 text-emerald-400 rounded-lg">
            <Lightbulb size={16} strokeWidth={2.5} />
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 mb-2">
          {offerRate}%
        </div>
        <div className="flex items-center text-xs text-gray-400 font-medium">
          <span>of total applications</span>
        </div>
      </div>
    </div>
  );
};

export default MetricsOverview;
