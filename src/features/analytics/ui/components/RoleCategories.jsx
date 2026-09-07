const RoleCategories = ({ roleData = [] }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800 mb-6">
        Role Categories
      </h3>

      {roleData.length === 0 ? (
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
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <p className="mt-3 text-sm font-medium text-gray-400">No roles tracked yet</p>
          <p className="text-xs mt-1 text-gray-400">
            Add applications with job titles to see breakdown
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {roleData.map((role, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs font-semibold text-gray-800 mb-2">
                <span className="truncate max-w-[180px]" title={role.title}>
                  {role.title}
                </span>
                <span className="text-gray-500 font-medium ml-2 shrink-0">
                  {role.count} {role.count === 1 ? "app" : "apps"}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${role.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleCategories;
