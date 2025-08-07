import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './components/ErrorPage'

const routes = createBrowserRouter([
    {
        path:"/",element:<Layout/>,
        children:[
            {
                path:"",element:<Home/>
            },
            {
                path:"/login",element:<Login/>
            }
        ]
    },
    {
        path:"*",element:<ErrorPage/>
    }
])

export default routes
