import PageHeader from '../../../../shared/ui/component/PageHeader';
import ApplicationsToolbar from '../components/ApplicationsToolbar';
import ApplicationsTable from '../components/ApplicationsTable';

const ApplicationsPage = () => {
  const applications = [
    {
      id: 1,
      role: 'Senior UX Designer',
      company: 'Acme Corp',
      locationMain: 'San Francisco, CA',
      locationSub: '(Hybrid)',
      status: 'Interviewing',
      statusTheme: 'blue',
      applied: 'Oct 24, 2023',
      interview: 'Nov 2, 2:00 PM',
      hasInterview: true,
      logoColor: 'text-blue-500',
    },
    {
      id: 2,
      role: 'Product Designer',
      company: 'Globex Solutions',
      locationMain: 'Remote',
      locationSub: '',
      status: 'Applied',
      statusTheme: 'gray',
      applied: 'Oct 26, 2023',
      interview: '--',
      hasInterview: false,
      logoColor: 'text-emerald-500',
    },
    {
      id: 3,
      role: 'Lead UI Designer',
      company: 'Initech',
      locationMain: 'Austin, TX',
      locationSub: '',
      status: 'Rejected',
      statusTheme: 'red',
      applied: 'Oct 10, 2023',
      interview: '--',
      hasInterview: false,
      logoColor: 'text-purple-500',
    },
  ];

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