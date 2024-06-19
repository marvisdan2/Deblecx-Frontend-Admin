import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles/createTheme";
// CUSTOM COMPONENTS
import MobileSidebar from "./components/MobileSidebar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import LayoutBodyWrapper from "./components/LayoutBodyWrapper";
import LayoutSetting from "@/layouts/layout-parts/LayoutSetting";
// DASHBOARD LAYOUT BASED CONTEXT PROVIDER
import LayoutProvider from "./context/layoutContext";

export default function DashboardLayoutV1({ children }: PropsWithChildren) {
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <LayoutProvider>
      {/* CONDITIONALLY RENDER THE SIDEBAR */}
      {downLg ? <MobileSidebar /> : <DashboardSidebar />}

      <LayoutBodyWrapper>
        {/* DASHBOARD HEADER SECTION */}
        <DashboardHeader />

        {/* MAIN CONTENT RENDER SECTION */}
        {children || <Outlet />}
      </LayoutBodyWrapper>
    </LayoutProvider>
  );
}
