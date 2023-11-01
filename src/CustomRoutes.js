import Layout from "./layouts";
import Pages from "./pages";
const CustomRoutes = [
  {
    path: "/:page",
    secure: false,
    exact: true,
    layout: Layout.DefaultLayout,
    component: Pages.Home,
  },
  {
    path: "/",
    secure: false,
    exact: true,
    layout: Layout.DefaultLayout,
    component: Pages.Home,
  },
  {
    path: "*",
    secure: false,
    exact: true,
    layout: Layout.DefaultLayout,
    component: Pages.Home,
  },
];
export default CustomRoutes;
