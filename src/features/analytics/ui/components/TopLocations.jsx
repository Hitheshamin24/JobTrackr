const TopLocations = ({ locationData = [] }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-gray-800">Top Locations</h3>
        <span className="text-[11px] text-gray-400 font-medium">
          by application count
        </span>
      </div>

      {locationData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="mt-3 text-sm font-medium text-gray-400">
            No location data yet
          </p>
          <p className="text-xs mt-1 text-gray-400">
            Add applications with locations to see this chart
          </p>
        </div>
      ) : (
        <div className="flex gap-6 items-center">
          <div className="flex-1 space-y-5">
            {locationData.map((loc, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-xs font-semibold text-gray-800 truncate"
                    title={loc.location}
                  >
                    {loc.location}
                  </div>
                  <div className="text-[10px] font-medium text-gray-400 capitalize">
                    {loc.types || "—"}
                  </div>
                </div>
                <div className="text-xs font-bold text-gray-800 shrink-0">
                  {loc.percent}%
                </div>
              </div>
            ))}
          </div>

          {/* Visual Map Dots */}
          <div className="w-32 h-28 bg-gray-50 rounded-xl relative overflow-hidden shrink-0 border border-gray-100">
            {locationData[0] && (
              <div className="absolute top-4 left-6 w-2.5 h-2.5 bg-blue-500 rounded-full ring-4 ring-blue-100 shadow-sm" />
            )}
            {locationData[1] && (
              <div className="absolute top-14 left-14 w-2 h-2 bg-blue-400 rounded-full ring-4 ring-blue-50 shadow-sm" />
            )}
            {locationData[2] && (
              <div className="absolute top-8 right-5 w-1.5 h-1.5 bg-blue-300 rounded-full ring-2 ring-blue-50 shadow-sm" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopLocations;
