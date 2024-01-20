import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Section/About.jsx';
import Contact from './Section/Contact.jsx';
import Pricing from './Section/Pricing.jsx';
import Testimonial from './Section/Testimonial.jsx';
import Hero from './Section/Hero.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

children:[
  {
    path: "/",
    element : <Hero />
  },
  {
    path: "/About",
    element : <About />
  },

  {
    path: "/Testimonial",
    element : <Testimonial />
  },

  {
    path : "/Pricing",
    element : <Pricing />
  },
  {
    path : "/Contact",
    element : <Contact />
  }
   
]
  },

  
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
