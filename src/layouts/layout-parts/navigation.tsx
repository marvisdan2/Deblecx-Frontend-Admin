import { ReactNode } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
// CUSTOM ICON COMPONENT
import duotone from "@/icons/duotone";

interface NavItem {
  type: string;
  name: string;
  path: string;
  label: string;
  access: string;
  iconText: string;
  disabled: boolean;
  badge?: ReactNode;
  children: Partial<NavItem>[];
  icon: (props: SvgIconProps) => JSX.Element;
}

export type Navigations = Partial<NavItem>;

export const navigations: Navigations[] = [
  { type: "label", label: "Dashboard" },
  {
    name: "Connectors",
    icon: duotone.UserList,
    children: [
      {
        name: "Errors",
        children: [
          { name: "Resume", path: "/dashboard/connectors/errors/resume" },
          { name: "Alert", path: "/dashboard/connectors/errors/alert" },
        ],
      },
    ],
  },

  {
    name: "Analytics",
    icon: duotone.PersonChalkboard,
    children: [
      { name: "Analytics 1", path: "/dashboard" },
      { name: "Analytics 2", path: "/dashboard/analytics-2" },
    ],
  },
  {
    name: "Sales",
    icon: duotone.Ecommerce,
    children: [
      { name: "Sales", path: "/dashboard/sales" },
      { name: "Sales 2", path: "/dashboard/sales-2" },
    ],
  },

  { name: "Profile", icon: duotone.UserProfile, path: "/dashboard/profile" },
  { name: "Account", icon: duotone.Accounts, path: "/dashboard/account" },
  {
    name: "Users",
    icon: duotone.UserList,
    children: [
      { name: "Add User", path: "/dashboard/add-user" },
      { name: "User List 1", path: "/dashboard/user-list" },
      { name: "User Grid 1", path: "/dashboard/user-grid" },
      { name: "User List 2", path: "/dashboard/user-list-2" },
      { name: "User Grid 2", path: "/dashboard/user-grid-2" },
    ],
  },

  {
    name: "Data Table",
    icon: duotone.DataTable,
    children: [{ name: "Data Table 1", path: "/dashboard/data-table-1" }],
  },
];
