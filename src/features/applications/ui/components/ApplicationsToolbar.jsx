import { Search, ChevronDown, ArrowUpDown } from 'lucide-react';

const ApplicationsToolbar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 mb-6 flex flex-wrap items-center gap-3 shadow-sm">
      <div className="relative flex-1 min-w-50">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" strokeWidth={2} />
        </div>
        <input
          type="text"
          className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Search company or role..."
        />
      </div>

      <div className="flex items-center gap-2">
        {['Status', 'Location', 'Job Type'].map((filter) => (
          <button key={filter} className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors">
            {filter}
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" strokeWidth={2.5} />
          </button>
        ))}
      </div>

      <div className="w-px h-6 bg-gray-200 mx-2 hidden sm:block"></div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          <ArrowUpDown className="h-4 w-4" strokeWidth={2} />
          Sort
        </button>
        <button className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors">
          Clear
        </button>
      </div>
    </div>
  );
};

export default ApplicationsToolbar;
