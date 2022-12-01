import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Settimg";
import { UserManegement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_manegement",
    exact: false,
    children: <UserManegement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  }
];
