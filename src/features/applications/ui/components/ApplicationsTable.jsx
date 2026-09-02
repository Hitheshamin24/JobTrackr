import { Building2, Calendar } from 'lucide-react';

const ApplicationsTable = ({ applications }) => {
  const getStatusStyles = (theme) => {
    switch (theme) {
      case 'blue':
        return 'bg-blue-50 text-blue-600';
      case 'red':
        return 'bg-red-50 text-red-600';
      case 'gray':
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getDotStyles = (theme) => {
    switch (theme) {
      case 'blue':
        return 'bg-blue-500';
      case 'red':
        return 'bg-red-500';
      case 'gray':
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Company & Role</th>
              <th className="py-4 px-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Location</th>
              <th className="py-4 px-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="py-4 px-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Applied</th>
              <th className="py-4 px-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Interview</th>
              <th className="py-4 px-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-gray-100 flex items-center justify-center bg-white shadow-sm">
                      <Building2 className={`w-5 h-5 ${app.logoColor} opacity-80`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{app.role}</div>
                      <div className="text-[13px] text-gray-500 mt-0.5">{app.company}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <div className="text-sm text-gray-600">{app.locationMain}</div>
                  {app.locationSub && (
                    <div className="text-[13px] text-gray-500 mt-0.5">{app.locationSub}</div>
                  )}
                </td>
                <td className="py-4 px-5">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyles(app.statusTheme)}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getDotStyles(app.statusTheme)}`}></span>
                    {app.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-gray-600">
                  {app.applied}
                </td>
                <td className="py-4 px-5 text-sm text-gray-600">
                  {app.hasInterview ? (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-blue-500" strokeWidth={2} />
                      {app.interview}
                    </div>
                  ) : (
                    <span className="text-gray-400">{app.interview}</span>
                  )}
                </td>
                <td className="py-4 px-5 align-middle">
                   {/* Empty space matching the mockup, typically where a context menu goes */}
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
