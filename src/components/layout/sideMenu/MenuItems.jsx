// added more menuItems for testing
const menuItems = [
    {
      name: "Dashboard",
      exact: true,
      to: "/",
      iconClassName: "bi bi-speedometer2",
    }, 
    {
      name: "Blog",
      exact: true,
      to: `/blog`,
      iconClassName: "bi bi-speedometer2",
      subMenus: [
        { name: "All Blogs", to: "/blog/blogs" },
        { name: "Create", to: "/blog/create" },
        { name: "Pending", to: "/blog/pending" }
      ],
    },
    {
      name: "User",
      exact: true,
      to: `/user`,
      iconClassName: "bi bi-speedometer2",
      subMenus: [
        { name: "All Users", to: "/user/users" },
        { name: "Admin", to: "/user/admin" },
        { name: "Moderator", to: "/user/moderator" },
        { name: "Pending User", to: "/user/pending" },
      ],
    }
  ];

  export default menuItems