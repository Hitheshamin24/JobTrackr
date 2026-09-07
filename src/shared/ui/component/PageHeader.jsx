import { Plus } from "lucide-react";
import { useApplicationContext } from "../../../features/applications/context/useApplicationContext";

const PageHeader = ({ title, subtitle }) => {
  const { setShowApplicationForm } = useApplicationContext();
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>

      <button
        onClick={() => setShowApplicationForm(true)}
        className="flex items-center justify-center bg-[#1d4ed8] hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors cursor-pointer w-full sm:w-auto"
      >
        <Plus className="h-4 w-4 mr-2" strokeWidth={2.5} />
        Add Application
      </button>
    </div>
  );
};

export default PageHeader;
