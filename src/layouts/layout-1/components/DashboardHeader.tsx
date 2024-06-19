import { Fragment, useContext } from "react";
// MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles/createTheme";
// SITE SETTINGS CONTEXT FILE
import { SettingsContext } from "@/contexts/settingsContext";
// CUSTOM ICON COMPONENTS
import Menu from "@/icons/Menu";
import ThemeIcon from "@/icons/ThemeIcon";
// LAYOUT BASED HOOK
import useLayout from "@/layouts/layout-1/context/useLayout";
// CUSTOM COMPONENTS
import ProfilePopover from "@/layouts/layout-parts/popovers/ProfilePopover";
import ServicePopover from "@/layouts/layout-parts/popovers/ServicePopover";
import LanguagePopover from "@/layouts/layout-parts/popovers/LanguagePopover";
import NotificationsPopover from "@/layouts/layout-parts/popovers/NotificationsPopover";
// STYLED COMPONENTS
import { DashboardHeaderRoot, StyledToolBar } from "@/layouts/layout-1/styles";

export default function DashboardHeader() {
  const { handleOpenMobileSidebar } = useLayout();
  const { settings, saveSettings } = useContext(SettingsContext);
  const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down(1200));

  const handleChangeTheme = (value: "light" | "dark") => {
    saveSettings({ ...settings, theme: value });
  };

  return (
    <DashboardHeaderRoot position="sticky">
      <StyledToolBar>
        {/* SMALL DEVICE SIDE BAR OPEN BUTTON */}
        {downMd && (
          <IconButton onClick={handleOpenMobileSidebar}>
            <Menu />
          </IconButton>
        )}

        <Box flexGrow={1} ml={1} />

        {/* THEME SWITCH BUTTON */}
        <IconButton
          onClick={() =>
            handleChangeTheme(settings.theme === "light" ? "dark" : "light")
          }
        >
          <ThemeIcon />
        </IconButton>

        {upSm && (
          <Fragment>
            <LanguagePopover />
            <NotificationsPopover />
            <ServicePopover />
          </Fragment>
        )}

        <ProfilePopover />
      </StyledToolBar>
    </DashboardHeaderRoot>
  );
}
