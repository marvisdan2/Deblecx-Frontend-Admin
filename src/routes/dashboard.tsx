import { lazy } from "react";
// CUSTOM COMPONENTS
import Loadable from "./Loadable";
import { AuthGuard } from "@/components/auth";

import useSettings from "@/hooks/useSettings";
import LayoutV1 from "@/layouts/layout-1";
import ConnectorPage from "@/pages/dashboard/connectors/ConnectorPage";

// CONNECTORS PAGES
// ERRORS
const ErrorAlertSection = Loadable(
  lazy(() => import("@/pages/dashboard/errors/ErrorAlertSection"))
);

// ALL DASHBOARD PAGES

const Sales = Loadable(lazy(() => import("@/pages/dashboard/sales")));
const Analytics = Loadable(lazy(() => import("@/pages/dashboard/analytics")));

// REACT DATA TABLE PAGE
const DataTable1 = Loadable(
  lazy(() => import("@/pages/dashboard/data-tables/table-1"))
);

const ActiveLayout = () => {
  const { settings } = useSettings();

  switch (settings.activeLayout) {
    case "layout1":
      return <LayoutV1 />;
    default:
      return <LayoutV1 />;
  }
};

export const DashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <ActiveLayout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Analytics /> },
      { path: "sales", element: <Sales /> },

      { path: "data-table-1", element: <DataTable1 /> },

      {
        path: "errors",
        children: [
          { path: "resume", element: <>Resume</> },
          { path: "alert", element: <ErrorAlertSection /> },
        ],
      },

      {
        path: "connectors",
        element: <ConnectorPage />,
      },
    ],
  },
];
