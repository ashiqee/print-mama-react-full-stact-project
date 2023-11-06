import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Services/AddService";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import MyServices from "../Pages/Services/MyServices/MyServices";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../Pages/Services/MyServices/Updateservice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

export default router;
