import { NavLink } from "react-router";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  ChartNoAxesCombined,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    path: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: ChartNoAxesCombined,
  },
];

const Navbar = () => {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex items-center px-5 py-5">
        <img
          src="/jobtrackrLogo.png"
          alt="JobTrackr"
          className="h-12 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="mt-3 flex flex-col gap-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex h-9 items-center gap-3 rounded-md px-3 text-xs font-medium transition ${
                  isActive
                    ? "border-r-2 border-blue-600 bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <Icon size={15} strokeWidth={1.8} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Navbar;
