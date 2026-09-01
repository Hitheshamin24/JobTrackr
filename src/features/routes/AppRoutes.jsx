import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "../../app/layout/MainLayout";
import DashboardPage from "../../shared/ui/pages/DashboardPage";
import ApplicationsPage from "../applications/ui/pages/ApplicationsPage";
import AnalyticsPage from "../analytics/ui/pages/AnalyticsPage";
import SettingPage from "../setting/ui/pages/SettingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"dashboard"} />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "applications",
        element: <ApplicationsPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path:"settings",
        element:<SettingPage/>
      }
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
