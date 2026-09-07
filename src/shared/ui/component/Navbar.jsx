import { NavLink } from "react-router";
import { X, LayoutDashboard, BriefcaseBusiness, ChartNoAxesCombined } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Applications", path: "/applications", icon: BriefcaseBusiness },
  { name: "Analytics", path: "/analytics", icon: ChartNoAxesCombined },
];

const Navbar = ({ onClose }) => {
  return (
    <div className="flex h-full flex-col">
      {/* Logo + Close button (mobile) */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 lg:border-none lg:py-5">
        <img src="/jobtrackrLogo.png" alt="JobTrackr" className="h-10 object-contain" />
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 lg:hidden"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-3 flex flex-col gap-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-r-2 border-blue-600 bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <Icon size={16} strokeWidth={1.8} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Mobile bottom nav spacer */}
      <div className="flex-1" />
    </div>
  );
};

export default Navbar;
