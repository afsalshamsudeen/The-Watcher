import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'

 const routes = createBrowserRouter([
    {
      path:"/", element:<Home/>
    },
    {
      path:"/signup", element:<Login/>
    }
  ])

function App() {

  return (<RouterProvider router={routes}/> )
}

export default App
