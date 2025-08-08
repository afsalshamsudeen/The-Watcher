import React from 'react'
import { Outlet, useLocation, useNavigate} from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import {auth} from "../firebase.js"
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

const Layout = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const hideNavBar = pathname ==="/" || pathname === "/login" || pathname === "/signup";
    const hideFooter = pathname ==="/login" || pathname ==="/signup"


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isPublicRoutes = ["/", "/login", "/signup"].includes(pathname);

      if (user && isPublicRoutes){
        navigate('/home', { replace:true})
      }
    });

    return ()=> unsubscribe();
  },[navigate, pathname])

  return (
    <>
      {!hideNavBar && <NavBar/>}
      <main className='min-h-screen'>
      <Outlet/>
      </main>
      {!hideFooter && <Footer/>}
    </>
  )
}

export default Layout
