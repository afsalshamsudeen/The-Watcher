import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './components/ErrorPage'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import ProtectedRoute from './components/ProtectedRoutes'

const routes = createBrowserRouter([
    {
        path:"/",element:<Layout/>,
        children:[
            {
                path:"",element:<Home/>
            },
            {
                path:"/login",element:<Login/>
            },
            {
                path:"/signup", element:<SignUp/>
            },
            {
                path:"/home", element:(
                <ProtectedRoute>
                    <HomePage/>
                </ProtectedRoute>
                )
            }
        ]
    },
    {
        path:"*",element:<ErrorPage/>
    }
])

export default routes
