import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "../../app/layout/MainLayout";
import DashboardPage from "../../shared/ui/pages/DashboardPage";
import ApplicationsPage from "../applications/ui/pages/ApplicationsPage";
import AnalyticsPage from "../analytics/ui/pages/AnalyticsPage";

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
          ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
