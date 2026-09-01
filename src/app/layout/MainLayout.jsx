import { Outlet } from "react-router";
import Navbar from "../../shared/ui/component/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="fixed h-screen inset-y-0 left-0 z-40 w-64 border-r border-gray-200 bg-white">
          <Navbar />
        </aside>

        {/* Main Content */}
        <main className="ml-64 min-h-screen w-[calc(100%-16rem)]">
          <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
