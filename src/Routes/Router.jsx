import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('https://toy-market-server-edtwavvvs-snigbar.vercel.app/allToys')
        }
      ]
    },
  ]);

  export default router