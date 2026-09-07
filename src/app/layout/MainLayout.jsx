import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/component/Navbar";
import { useApplicationContext } from "../../features/applications/context/useApplicationContext";
import ApplicationForm from "../../features/applications/ui/components/ApplicationForm";
import ApplicationProvider from "../../features/applications/context/ApplicationProvider";
import { useApplicationsHook } from "../../features/applications/hooks/useAppicationsHook";

const MainLayoutContent = () => {
  const { showApplicationForm } = useApplicationContext();
  const { onClose } = useApplicationsHook();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — hidden on mobile, drawer on tablet, fixed on desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <Navbar onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen lg:ml-64">
        {/* Mobile top header */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
            aria-label="Open menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <img src="/jobtrackrLogo.png" alt="JobTrackr" className="h-8 object-contain" />
          <div className="w-9" />
        </header>

        {/* Page content */}
        <main className="flex-1 w-full">
          <div className="mx-auto w-full max-w-7xl">
            {showApplicationForm && (
              <ApplicationForm onClose={onClose} />
            )}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const MainLayout = () => (
  <ApplicationProvider>
    <MainLayoutContent />
  </ApplicationProvider>
);

export default MainLayout;
