import {
  Building2,
  Calendar,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useApplicationsHook } from "../../hooks/useAppicationsHook";
import { useApplicationContext } from "../../context/useApplicationContext";

const ApplicationsTable = ({ applications }) => {
  const [showActionModal, setShowActionModal] = useState(null);
  const { handleDeleteApplication } = useApplicationsHook();
  const { setEditingApplication, setShowApplicationForm } =
    useApplicationContext();
  const getStatusStyles = (theme) => {
    if (applications.currentStatus === "applied")
      return "bg-blue-50 text-blue-600";
    if (applications.currentStatus === "interviewing")
      switch (theme) {
        case "blue":
          return "bg-blue-50 text-blue-600";
        case "red":
          return "bg-red-50 text-red-600";
        case "gray":
        default:
          return "bg-gray-100 text-gray-600";
      }
  };

  const getDotStyles = (theme) => {
    switch (theme) {
      case "blue":
        return "bg-blue-500";
      case "red":
        return "bg-red-500";
      case "gray":
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          {/* Header */}
          <thead className="bg-slate-50/70">
            <tr className="border-b border-slate-200">
              {[
                "Company & Role",
                "Location",
                "Status",
                "Applied",
                "Interview",
                "Actions",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-slate-100">
            {applications.map((app, index) => (
              <tr
                key={app.id}
                className="group transition-colors hover:bg-slate-50/70"
              >
                {/* Company & Role */}
                <td className="px-5 py-4">
                  <a
                    href={app.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/company flex items-center gap-3.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-colors group-hover:border-slate-300 group-hover:bg-white">
                        <Building2
                          className="h-5 w-5 text-slate-500"
                          strokeWidth={1.6}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {app.jobTitle}
                        </p>
                        <p className="mt-0.5 truncate text-[13px] text-slate-500">
                          {app.companyName}
                        </p>
                      </div>
                    </div>
                  </a>
                </td>

                {/* Location */}
                <td className="px-5 py-4">
                  <p className="text-sm text-slate-700">{app.location}</p>

                  {app.locationType && (
                    <p className="mt-0.5 text-xs text-slate-400">
                      {app.locationType}
                    </p>
                  )}
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${getStatusStyles(
                      app.statusTheme,
                    )}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${getDotStyles(
                        app.statusTheme,
                      )}`}
                    />

                    {app.currentStatus}
                  </span>
                </td>

                {/* Applied */}
                <td className="px-5 py-4 text-sm text-slate-600">
                  {app.applicationDate}
                </td>

                {/* Interview */}
                <td className="px-5 py-4">
                  {app.nexInterviewDate ? (
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-600">
                      <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
                      {app.nexInterviewDate}
                    </div>
                  ) : (
                    <span className="text-sm text-slate-400">
                      {app.interview || "—"}
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="relative px-5 py-4">
                  <button
                    type="button"
                    onClick={() =>
                      setShowActionModal(
                        showActionModal === index ? null : index,
                      )
                    }
                    aria-label="Application actions"
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-transparent text-slate-400 transition-all hover:border-slate-200 hover:bg-white hover:text-slate-700 hover:shadow-sm"
                  >
                    <MoreHorizontal size={16} />
                  </button>

                  {showActionModal === index && (
                    <div className="absolute right-5 top-14 z-50 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-200/50">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingApplication(app);
                          setShowApplicationForm(true);
                          setShowActionModal(null);
                        }}
                        className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        <Pencil size={14} className="text-slate-500" />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          handleDeleteApplication(app.id);
                          setShowActionModal(null);
                        }}
                        className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsTable;
