import {

    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Component/Layout";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;