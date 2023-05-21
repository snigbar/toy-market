import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('https://toy-market-server-ndbhwy4be-snigbar.vercel.app/')
        },
        {
            path:"/alltoys",
            element:<AllToys></AllToys>
           
        }
      ]
    },
  ]);

  export default router