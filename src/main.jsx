import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,About,Contact,Project,Skills } from './routes/index.js'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      { path:"/home",element:<Home/>},
      { path:"/about",element:<About/>},
      { path:"/contact",element:<Contact/>},
      { path:"/project",element:<Project/>},
      { path:"/Skills",element:<Skills/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
 <RouterProvider router={router}/>
 </StrictMode>,
)
