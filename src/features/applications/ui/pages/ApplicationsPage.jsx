import PageHeader from '../../../../shared/ui/component/PageHeader';
import ApplicationsToolbar from '../components/ApplicationsToolbar';
import ApplicationsTable from '../components/ApplicationsTable';
import { useSelector } from 'react-redux';

const ApplicationsPage = () => {
  

  const {applications}=useSelector((state)=>state.applications)

  return (
    <div className="min-h-screen bg-[#fafbfc] p-8 font-sans text-gray-900">
      <PageHeader
        title={
          <>
            Applications <span className="text-gray-400 font-normal text-lg tracking-wide">({applications.length})</span>
          </>
        }
        subtitle="Manage and track your job applications pipeline."
      />
      <ApplicationsToolbar />
      <ApplicationsTable applications={applications} />
    </div>
  );
};

export default ApplicationsPage;