import { X, ChevronDown, Calendar, Save } from "lucide-react";

const ApplicationForm = ({onClose}) => {
  return (
    // Neutral dark background with a blur effect (no colors)
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">
      
      {/* Modal Container - Neutral frosted glass effect */}
      <div onClick={(e)=>e.stopPropagation()} className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
        
        {/* Header */}
        <div className="px-7 pt-7 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">
              Add Application
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Track a new job opportunity.
            </p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-md hover:bg-black/5">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="px-7 py-2 space-y-6">
          
          {/* Row 1: Company & Job Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className="w-full px-3.5 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Product Designer"
                className="w-full px-3.5 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Row 2: Job URL */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
              Job URL
            </label>
            <input
              type="text"
              placeholder="https://..."
              className="w-full px-3.5 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
            />
          </div>

          {/* Row 3: Location, Job Type, Salary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Location
              </label>
              <div className="relative">
                <select className="w-full px-3.5 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 focus:bg-white transition-all cursor-pointer shadow-sm">
                  <option>Select...</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Job Type
              </label>
              <div className="relative">
                <select className="w-full px-3.5 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 focus:bg-white transition-all cursor-pointer shadow-sm">
                  <option>Select...</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Salary Expectation
              </label>
              <input
                type="text"
                placeholder="e.g. $120k - $150k"
                className="w-full px-3.5 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Row 4: Status & Dates (Glass Box) */}
          <div className="bg-gray-50/40 rounded-xl p-5 border border-gray-200/50 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Current Status <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full px-3.5 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 focus:bg-white transition-all cursor-pointer shadow-sm">
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Application Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    className="w-full pl-3.5 pr-10 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
                  />
                  <Calendar className="absolute right-3.5 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Next Interview
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    className="w-full pl-3.5 pr-10 py-2.5 bg-white/50 border border-gray-200/60 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
                  />
                  <Calendar className="absolute right-3.5 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 5: Notes */}
          <div className="pb-4">
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
              Notes
            </label>
            <textarea
              rows={3}
              placeholder="Important details, contacts, or requirements..."
              className="w-full px-3.5 py-3 bg-white/50 border border-gray-200/60 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none transition-all shadow-sm"
            ></textarea>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-7 py-5 border-t border-gray-200/50 bg-gray-50/40 flex justify-end gap-3 rounded-b-2xl mt-2 backdrop-blur-sm">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white/60 border border-gray-200/60 rounded-lg hover:bg-white hover:text-gray-900 transition-colors shadow-sm">
            Cancel
          </button>
          <button className="flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#1d4ed8]/90 backdrop-blur-md rounded-lg hover:bg-blue-800 transition-colors shadow-sm">
            <Save className="w-4 h-4 mr-2" strokeWidth={2.5} />
            Save Application
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ApplicationForm;