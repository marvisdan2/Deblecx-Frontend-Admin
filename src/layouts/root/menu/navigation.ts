export const PAGES_MENUS = [
  {
    id: 1,
    title: "Dashboard",
    child: [
      { id: 1, title: "Analytics", href: "/dashboard" },
      { id: 7, title: "Sales", href: "/dashboard/sales" },
    ],
  },
  {
    id: 2,
    title: "Pages",
    child: [
      { id: 1, title: "About Us", href: "/about-us" },
      { id: 2, title: "Contact Us", href: "/contact-us" },
      { id: 3, title: "FAQs", href: "/faqs" },
    ],
  },
  {
    id: 3,
    title: "Session",
    child: [
      { id: 1, title: "Login", href: "/login" },
      { id: 2, title: "Register", href: "/register" },
      { id: 4, title: "Forget Password", href: "/forget-password" },
      { id: 5, title: "Verify OTP Code", href: "/verify-code" },
      { id: 3, title: "Not Found", href: "/abc" },
      { id: 6, title: "Coming Soon", href: "/coming-soon" },
      { id: 7, title: "Maintenance", href: "/maintenance" },
    ],
  },
];
