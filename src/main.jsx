import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SingleBlog from './components/SingleBlog.jsx'
const router=createBrowserRouter([{
     path:'/',
     element:<App />,
     children:[{
      path:'/',
      element:<Home />
      
     },{
      path:'/blogs',
      element:<Blogs />
     },
     {
      path:'/about',
      element:<About />
     },
     {
      path:'/services',
      element:<Services />
     },
     {
      path:'/contact',
      element:<Contact />
     },
     {
      //This is for single Blog Post Rendering 
      path:'/blogs/:id',
      element:<SingleBlog />,
      loader:({params})=>fetch(`https://blog-server-side-ten.vercel.app/blogs/${params.id}`)
     }
    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
