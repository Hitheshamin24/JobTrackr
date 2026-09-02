import PageHeader from '../../../../shared/ui/component/PageHeader';
import AnalyticsContent from '../components/AnalyticsContent';

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] p-8 font-sans text-gray-900">
      <PageHeader
        title="Analytics"
        subtitle="Insights and metrics for your job applications."
      />
      <AnalyticsContent />
    </div>
  );
};

export default AnalyticsPage;