import { Children, useState } from 'react'
import { createBrowserRouter , RouterProvider , Router } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Details from './components/portfolio/Details'
import Contact from './components/contact/Contact'
import NotFound from './components/notfound/NotFound'





function App() {
 const path = createBrowserRouter([{path:"" , element:<Layout/> , children:[
  {index:true , element: <Home />},
  {path:"home" , element: <Home />},
  {path:"about" ,element: <About/> },
  {path:"portfolio" , element :<Portfolio />},
  {path:"details" , element :<Details/>},
  {path:"contact" , element :<Contact/>},
    {path:"*" , element :<NotFound/>},


 ]}])

  return (
    <>
    <RouterProvider router={path} />
    
   

     </>
  )
}

export default App
