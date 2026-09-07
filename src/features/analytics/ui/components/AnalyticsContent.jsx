import { useAnalyticsHooks } from "../../hooks/useAnalytics";
import MetricsOverview from "./MetricsOverview";
import ApplicationVelocity from "./ApplicationVelocity";
import PipelineStatus from "./PipelineStatus";
import RoleCategories from "./RoleCategories";
import TopLocations from "./TopLocations";

const AnalyticsContent = () => {
  const { metrics, velocityData, pipelineData, roleData, locationData } =
    useAnalyticsHooks();

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-sans text-gray-800">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* --- Top Metrics Row --- */}
        <MetricsOverview metrics={metrics} />

        {/* --- Middle Charts Row --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <ApplicationVelocity velocityData={velocityData} />
          <PipelineStatus pipelineData={pipelineData} />
        </div>

        {/* --- Bottom Row --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RoleCategories roleData={roleData} />
          <TopLocations locationData={locationData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContent;
