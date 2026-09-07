const StatCard = ({ stat }) => {
  return (
    <div className="bg-white p-3 sm:p-5 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-2 sm:mb-4">
        <h3 className="text-[10px] sm:text-[11px] font-bold text-gray-400 tracking-wider uppercase">
          {stat.title}
        </h3>
        <div className="p-1 bg-gray-50/80 rounded-md">
          {stat.icon}
        </div>
      </div>
      <div className="mb-1">
        <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.count}</span>
      </div>
      <div>
        <span className={`text-[11px] sm:text-[13px] font-medium ${stat.subtitleColor}`}>
          {stat.subtitle}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
