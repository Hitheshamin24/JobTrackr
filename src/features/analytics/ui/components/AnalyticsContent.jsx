import { BarChart3 } from 'lucide-react';

const AnalyticsContent = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 flex items-center justify-center shadow-sm min-h-[400px]">
      <div className="text-center">
        <BarChart3 className="mx-auto h-12 w-12 text-gray-300 mb-4" strokeWidth={1.5} />
        <h3 className="text-lg font-medium text-gray-900">Analytics Data Not Available</h3>
        <p className="mt-1 text-sm text-gray-500">More charts and metrics will appear here soon.</p>
      </div>
    </div>
  );
};

export default AnalyticsContent;
