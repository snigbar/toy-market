import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'


  ReactDOM.createRoot(document.getElementById("root")).render(
    <div className='max-w-screen-xl mx-auto mt-2'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  )

