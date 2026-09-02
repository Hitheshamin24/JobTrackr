import PageHeader from '../component/PageHeader';
import StatCard from '../component/StatCard';
import { Briefcase, Calendar, FileCheck, FileX } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    {
      id: 1,
      title: 'TOTAL',
      count: '42',
      subtitle: '✓ 4 this week',
      subtitleColor: 'text-emerald-500',
      icon: <Briefcase className="w-5 h-5 text-blue-500" strokeWidth={2} />,
    },
    {
      id: 2,
      title: 'INTERVIEWS',
      count: '5',
      subtitle: '2 upcoming',
      subtitleColor: 'text-emerald-500',
      icon: <Calendar className="w-5 h-5 text-emerald-500" strokeWidth={2} />,
    },
    {
      id: 3,
      title: 'OFFERS',
      count: '1',
      subtitle: 'Awaiting decision',
      subtitleColor: 'text-gray-400',
      icon: <FileCheck className="w-5 h-5 text-orange-400" strokeWidth={2} />,
    },
    {
      id: 4,
      title: 'REJECTED',
      count: '12',
      subtitle: 'Keep pushing!',
      subtitleColor: 'text-gray-400',
      icon: <FileX className="w-5 h-5 text-red-400" strokeWidth={2} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] p-8 font-sans">
      <PageHeader
        title="Good morning"
        subtitle="Here's what's happening with your applications today."
      />

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;