import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';



import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './Providers/AuthProviders';


  ReactDOM.createRoot(document.getElementById("root")).render(
    <div className='max-w-screen-xl mx-auto mt-2'>
    <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </AuthProvider>
    </div>
  )

