import { X, Save } from "lucide-react";
import { useApplicationsHook } from "../../hooks/useAppicationsHook";
import { useApplicationContext } from "../../context/useApplicationContext";
import { useEffect } from "react";

const ApplicationForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    handleApplicationsError,
    handleApplicationsSubmit,
    reset,
  } = useApplicationsHook();
  const { editingApplication } = useApplicationContext();
  const onSubmit = (data) => {
    handleApplicationsSubmit(data,editingApplication);
  };
  useEffect(() => {
    if (editingApplication) {
      reset(editingApplication);
    } else {
      reset({
        applicationDate: new Date(Date.now()).toISOString().split("T")[0],
      });
    }
  }, [reset, editingApplication]);
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex h-12 items-center justify-between border-b border-slate-200 px-4">
          <div className="flex items-center gap-2">
            <div>
              <h2 className="text-xs font-semibold text-slate-800">
                {editingApplication ? "Update Application" : " New Application"}
              </h2>
              <p className="text-[9px] text-slate-400">
                Track a new job opportunity
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={16} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit, handleApplicationsError)}
          id="application-form"
          className="px-4 py-4"
        >
          {/* Row 1: Company Name + Job Title */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("companyName", {
                  required: "company name is required",
                })}
                type="text"
                placeholder="e.g. Acme Corp"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("jobTitle", {
                  required: "Job title is required",
                })}
                placeholder="e.g. Senior Product Designer"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              />
            </div>
          </div>
          {/* Row 2: Job URL */}
          <div className="mb-4">
            <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
              Job URL
            </label>
            <input
              {...register("companyUrl", {
                required: "Company URL is required",
              })}
              type="text"
              placeholder="https://..."
              className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
            />
          </div>
          {/* Row 3: Location + Job Type + Salary */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Location Type
              </label>
              <select
                {...register("locationType", {
                  required: "Location type is required",
                })}
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-600 outline-none transition hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              >
                <option value="">Select location</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Location
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                placeholder="e.g. Mangalore"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              />
            </div>
          </div>{" "}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Job Type
              </label>
              <select
                {...register("jobType", {
                  required: "Job Type is required",
                })}
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-600 outline-none transition hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              >
                <option value="">Select type</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Salary Expectation
              </label>
              <input
                type="number"
                {...register("salaryExpectation", {
                  required: "salary expectation is required",
                })}
                placeholder="e.g. ₹12k - ₹15k"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              />
            </div>
          </div>
          {/* Row 4: Status + Dates */}
          <div className="mb-4 rounded-lg bg-slate-50 p-3 border border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Current Status <span className="text-red-500">*</span>
              </label>
              <select
                {...register("currentStatus", {
                  required: "Current status is required",
                })}
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-600 outline-none transition hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              >
                <option value="applied">Applied</option>
                <option value="interviewing">Interviewing</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Application Date <span className="text-red-500">*</span>
              </label>
              <input
                {...register("applicationDate", {
                  required: "Application Date is required",
                })}
                type="date"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-600 outline-none transition hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
                Next Interview
              </label>
              <input
                {...register("nexInterviewDate", {})}
                type="date"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-600 outline-none transition hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
              />
            </div>
          </div>
          {/* Row 5: Notes */}
          <div>
            <label className="mb-1.5 block text-[10px] font-medium text-slate-700">
              Notes{" "}
              <span className="font-normal text-slate-400">(Optional)</span>
            </label>
            <textarea
              {...register("notes")}
              placeholder="Important details, contacts, or requirements..."
              rows={3}
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
            />
          </div>
        </form>

        {/* Footer */}
        <div className="flex justify-end gap-2 border-t border-slate-200 bg-slate-50 px-4 py-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white/60 border border-gray-200/60 rounded-lg hover:bg-white hover:text-gray-900 transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="application-form"
            className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#1d4ed8]/90 rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4 mr-2" strokeWidth={2.5} />
            {editingApplication ? "Update Application" : "Save Application"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
