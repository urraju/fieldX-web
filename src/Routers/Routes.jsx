import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Dashboard/Dashboard";
import Users from "../Dashboard/Users/Users";
import Area from "../Dashboard/Area/Area";
import Region from "../Dashboard/Region/Region";
import CreateArea from "../Dashboard/CreateArea/CreateArea";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "region",
        element: <Region />,
      },
      {
        path: "area",
        element: <Area />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "createarea",
        element: <CreateArea />,
      },
    ],
  },
]);

export default router;
