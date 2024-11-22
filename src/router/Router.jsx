import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/root/Home.jsx";
import Root from "../layout/root/Root.jsx";
import AddCoffee from "../pages/addCoffe/AddCoffee.jsx";
import AllCoffee from "../pages/allCoffe/AllCoffee.jsx";
import SignIn from "../pages/signin/SignIn.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import UpdateCoffee from "../pages/updateCoffe/UpdateCoffee.jsx";
import Users from "../pages/users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/coffee",
        element: <AllCoffee></AllCoffee>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/coffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;
