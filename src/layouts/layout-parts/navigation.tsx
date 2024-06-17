import { ReactNode } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
// CUSTOM ICON COMPONENT
import duotone from "@/icons/duotone";

// ==============================================================
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
// ==============================================================

export const navigations: Navigations[] = [
  { type: "label", label: "Dashboard" },
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

  { type: "label", label: "Apps" },

  {
    name: "Pages",
    icon: duotone.Pages,
    children: [
      { name: "About", path: "/dashboard/about" },
      { name: "Support", path: "/dashboard/support" },
    ],
  },
  {
    type: "extLink",
    name: "Documentation",
    icon: duotone.FileCircleQuestion,
    path: "https://uko-doc.vercel.app/",
  },

  { type: "label", label: "Others" },
  {
    path: "https://uko-doc.vercel.app/",
    name: "Item Disabled",
    icon: duotone.Folder,
    disabled: true,
  },
  {
    name: "Multi Level Item",
    icon: duotone.Apps,
    children: [
      { name: "Level A", path: "#dashboard/cart" },
      {
        iconText: "B",
        name: "Level B",
        path: "#dashboard/payment",
        children: [
          { name: "Level B1", path: "#dashboard/payment" },
          {
            iconText: "B",
            name: "Level B2",
            path: "#dashboard/payment",
            children: [
              { name: "Level B21", path: "#dashboard/payment" },
              { name: "Level B22", path: "#dashboard/payment" },
            ],
          },
        ],
      },
    ],
  },
];
