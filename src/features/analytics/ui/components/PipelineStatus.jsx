const SEGMENT_COLORS = {
  Applied: "bg-gray-400",
  Interviewing: "bg-blue-500",
  Offer: "bg-green-500",
  Rejected: "bg-red-400",
};

const PipelineStatus = ({ pipelineData }) => {
  const { conicGradient, segments = [], total = 0 } = pipelineData || {};

  const isEmpty = total === 0;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800 mb-6">
        Pipeline Status
      </h3>
      <div className="flex flex-col items-center justify-center">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center text-gray-300 py-8">
            <div className="w-44 h-44 rounded-full border-[12px] border-gray-100 flex items-center justify-center mb-6">
              <span className="text-sm font-medium text-gray-400">No data</span>
            </div>
            <p className="text-xs text-gray-400">Add applications to see pipeline</p>
          </div>
        ) : (
          <>
            {/* CSS Conic Gradient Donut */}
            <div
              className="relative w-44 h-44 rounded-full mb-8 shadow-sm"
              style={{ background: conicGradient }}
            >
              <div className="absolute inset-[15%] bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                <span className="text-3xl font-extrabold text-gray-800">
                  {total}
                </span>
                <span className="text-[11px] font-medium text-gray-400">
                  Total
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full px-2">
              {segments.map((seg) => (
                <div
                  key={seg.label}
                  className="flex items-start text-[11px] text-gray-600 font-medium"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full mr-2 mt-0.5 shrink-0 ${
                      SEGMENT_COLORS[seg.label] || "bg-gray-300"
                    }`}
                  />
                  <div className="leading-tight">
                    {seg.label}
                    <br />
                    <span className="text-gray-400 font-normal">
                      ({seg.pct}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PipelineStatus;
