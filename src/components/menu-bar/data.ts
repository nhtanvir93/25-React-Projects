const menus = [
  {
    title: "Dashboard",
    to: "/",
  },
  {
    title: "Profile",
    to: "/profile",
    children: [
      {
        title: "Personal Information",
        to: "/profile/personal-info",
      },
      {
        title: "Education",
        to: "/profile/education",
      },
      {
        title: "Address",
        to: "/profile/address",
      },
      {
        title: "Achievement",
        to: "/profile/achievement",
        children: [
          {
            title: "Certificate",
            to: "/profile/achievement/certificate",
          },
        ],
      },
    ],
  },
  {
    title: "Requisition",
    to: "/requisition",
    children: [
      {
        title: "Request for Items",
        to: "/requisition/add",
      },
      {
        title: "View Requests",
        to: "/requisition/list",
      },
    ],
  },
];

export default menus;
