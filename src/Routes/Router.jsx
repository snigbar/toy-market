import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";




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
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<Signup></Signup>
        }
      ]
    },
  ]);

  export default router