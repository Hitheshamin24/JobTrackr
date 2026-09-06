import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useDashBoardHook = () => {
  const { applications } = useSelector((state) => state.applications);

  const getTotalCount = () => {
    return applications.length;
  };
  const getThisWeek = () => {
    const today = new Date();

    const day = today.getDay();
    const diff = day === 0 ? -6 : 1 - day;

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + diff);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const thisWeek = applications.filter((application) => {
      const applicationDate = new Date(application.applicationDate);
      return applicationDate >= startOfWeek && applicationDate <= endOfWeek;
    });
    return thisWeek.length;
  };

  const getUpcomingInterviews = () => {
    const today = new Date();

    const upcoming = applications.filter((application) => {
      const nexInterviewDate = new Date(application.nexInterviewDate);

      return nexInterviewDate > today;
    });
    console.log(upcoming);
    return upcoming.length;
  };

  const getInterviewsCount = () => {
    const interviews = applications.filter((application) => {
      return application.currentStatus === "interviewing";
    });

    return interviews.length;
  };

  const getOfferCount = () => {
    const offers = applications.filter((application) => {
      return application.currentStatus === "offer";
    });
    return offers.length;
  };
  useEffect(() => {
    getTotalCount();
    getThisWeek();
    getUpcomingInterviews();
    getInterviewsCount();
    getOfferCount();
  }, [applications]);
  return {
    getTotalCount,
    getThisWeek,
    getUpcomingInterviews,
    getInterviewsCount,
    getOfferCount,
  };
};
