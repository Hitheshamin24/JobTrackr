import { Search, ArrowUp, ArrowDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setJobType,
  setLocation,
  setStatus,
  clearFilter,
  setSearch,
  setSort,
} from "../../state/filterSlice";

const ApplicationsToolbar = () => {
  const { applications } = useSelector((state) => state.applications);
  const { status, location, jobType, search, sort } = useSelector(
    (state) => state.filter,
  );
  const dispatch = useDispatch();
  const statusOption = [
    ...new Set(
      applications.map((application) => {
        const statusWithCapitalized =
          application.currentStatus.trim()[0].toUpperCase() +
          application.currentStatus.slice(1).toLowerCase();
        return statusWithCapitalized;
      }),
    ),
  ];
  const locationOption = [
    ...new Set(
      applications.map((application) => {
        return (
          application?.location.trim()[0].toUpperCase() +
          application.location?.slice(1).toLowerCase()
        );
      }),
    ),
  ];

  const jobTypeOption = [
    ...new Set(
      applications.map((application) => {
        return (
          application?.jobType.trim()[0].toUpperCase() +
          application.jobType?.slice(1).toLowerCase()
        );
      }),
    ),
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 mb-6 flex flex-col md:flex-row md:items-center gap-3 shadow-sm">
      <div className="relative flex-1 w-full">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" strokeWidth={2} />
        </div>
        <input
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="text"
          className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Search company or role..."
        />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
        <select
          value={status}
          onChange={(e) => dispatch(setStatus(e.target.value))}
          className="w-full sm:w-auto px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Status</option>
          {statusOption.map((st,index) => {
            return <option key={index} value={st.toLowerCase()}>{st}</option>;
          })}
        </select>

        <select
          value={location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
          className="w-full sm:w-auto px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Location</option>
          {locationOption.map((lc,index) => {
            return <option key={index} value={lc.toLowerCase()}>{lc}</option>;
          })}
        </select>
        <select
          value={jobType}
          onChange={(e) => dispatch(setJobType(e.target.value))}
          className="w-full sm:w-auto px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name=""
          id=""
        >
          <option value="">All Mode</option>
          {jobTypeOption.map((jt,index) => {
            return <option key={index} value={jt.toLowerCase()}>{jt}</option>;
          })}
        </select>
      </div>

      <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>

      <div className="flex items-center justify-between md:justify-start gap-4 px-1 md:px-0 w-full md:w-auto mt-1 md:mt-0">
        <button
          onClick={() => dispatch(setSort(!sort))}
          className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          {sort ? (
            <ArrowUp className="h-4 w-4" strokeWidth={2} />
          ) : (
            <ArrowDown className="h-4 w-4" strokeWidth={2} />
          )}
          Sort
        </button>
        <button
          onClick={() => dispatch(clearFilter())}
          className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ApplicationsToolbar;
