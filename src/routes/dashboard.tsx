import { lazy } from "react";
// CUSTOM COMPONENTS
import Loadable from "./Loadable";
import { AuthGuard } from "@/components/auth";

import useSettings from "@/hooks/useSettings";
import LayoutV1 from "@/layouts/layout-1";

// ALL DASHBOARD PAGES

const Sales = Loadable(lazy(() => import("@/pages/dashboard/sales")));
const Analytics = Loadable(lazy(() => import("@/pages/dashboard/analytics")));

// USER LIST PAGES
const AddNewUser = Loadable(
  lazy(() => import("@/pages/dashboard/users/add-new-user"))
);
const UserListView = Loadable(
  lazy(() => import("@/pages/dashboard/users/user-list-1"))
);
const UserGridView = Loadable(
  lazy(() => import("@/pages/dashboard/users/user-grid-1"))
);
const UserListView2 = Loadable(
  lazy(() => import("@/pages/dashboard/users/user-list-2"))
);
const UserGridView2 = Loadable(
  lazy(() => import("@/pages/dashboard/users/user-grid-2"))
);

// USER ACCOUNT PAGE
const Account = Loadable(lazy(() => import("@/pages/dashboard/accounts")));

// USER PROFILE PAGE
const Profile = Loadable(lazy(() => import("@/pages/dashboard/profile")));

// REACT DATA TABLE PAGE
const DataTable1 = Loadable(
  lazy(() => import("@/pages/dashboard/data-tables/table-1"))
);

//  PROJECT PAGES
const ProjectV1 = Loadable(
  lazy(() => import("@/pages/dashboard/projects/version-1"))
);
const ProjectV2 = Loadable(
  lazy(() => import("@/pages/dashboard/projects/version-2"))
);
const ProjectV3 = Loadable(
  lazy(() => import("@/pages/dashboard/projects/version-3"))
);
const ProjectDetails = Loadable(
  lazy(() => import("@/pages/dashboard/projects/details"))
);
const TeamMember = Loadable(
  lazy(() => import("@/pages/dashboard/projects/team-member"))
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

      { path: "add-user", element: <AddNewUser /> },
      { path: "user-list", element: <UserListView /> },
      { path: "user-grid", element: <UserGridView /> },
      { path: "user-list-2", element: <UserListView2 /> },
      { path: "user-grid-2", element: <UserGridView2 /> },

      { path: "account", element: <Account /> },

      { path: "profile", element: <Profile /> },

      { path: "data-table-1", element: <DataTable1 /> },

      {
        path: "projects",
        children: [
          { path: "version-1", element: <ProjectV1 /> },
          { path: "version-2", element: <ProjectV2 /> },
          { path: "version-3", element: <ProjectV3 /> },
          { path: "details", element: <ProjectDetails /> },
          { path: "team-member", element: <TeamMember /> },
        ],
      },
    ],
  },
];
