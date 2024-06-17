import { lazy } from "react";
import { Outlet } from "react-router-dom";
// CUSTOM COMPONENTS
import Loadable from "./Loadable";
import RootLayout from "@/layouts/root/RootLayout";
import NewPage from "@/pages/NewPage";

// ROLE BASED PERMISSION TEST PAGE
const Permission = Loadable(lazy(() => import("@/pages/permission")));

// FEATURES RELATED PAGES
const ContactUs = Loadable(lazy(() => import("@/pages/contact-us")));

export const PublicRoutes = [
  { path: "permission", element: <Permission /> },
  {
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    children: [
      { path: "new-page", element: <NewPage /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
];
