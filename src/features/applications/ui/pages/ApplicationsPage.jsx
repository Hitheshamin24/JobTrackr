import PageHeader from '../../../../shared/ui/component/PageHeader';
import ApplicationsToolbar from '../components/ApplicationsToolbar';
import ApplicationsTable from '../components/ApplicationsTable';
import { useApplicationsHook } from '../../hooks/useAppicationsHook';

const ApplicationsPage = () => {
  

const {filteredApplications}=useApplicationsHook()
  return (
    <div className="min-h-screen bg-[#fafbfc] px-4 py-5 sm:px-6 sm:py-8 font-sans text-gray-900">
      <PageHeader
        title={
          <>
            Applications <span className="text-gray-400 font-normal text-lg tracking-wide">({filteredApplications.length})</span>
          </>
        }
        subtitle="Manage and track your job applications pipeline."
      />
      <ApplicationsToolbar />
      <ApplicationsTable applications={filteredApplications} />
    </div>
  );
};

export default ApplicationsPage;