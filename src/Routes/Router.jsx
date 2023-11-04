
import {
    createBrowserRouter
 
  } from "react-router-dom";
import MainLayout from "../Pages/mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Services/AddService";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: '/',
            element:<Home/>
        },
        {
            path:'/services',
            element:<Services/>
        },
        {
            path:'/service/:id',
            element:<ServiceDetails/>

        },
        {
            path:'/addService',
            element:<AddService/>

        }
    
    ]
    },
{
    path:'/login',
    element: <Login/>
},{
    path:'/signup',
    element:<Register/>
}

  ]);

export default router;