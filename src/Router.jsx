import {

    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "./Pages/Home";

import Layout from "./Component/Layout";
import BookMarks from "./Pages/BookMarks";
import Blogs from "./Pages/Blogs";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
         path:'/blogs',
         element:<Blogs></Blogs>
        },
        {
          path:'/bookmarks',
          element:<BookMarks></BookMarks>
        }
      ]
    },
  ]);

  export default router;