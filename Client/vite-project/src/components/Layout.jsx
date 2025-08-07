import React from 'react'
import { Outlet, useLocation} from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const hideNavBar = pathname ==="/" || pathname === "/login";
    const hideFooter = pathname ==="/login"
  return (
    <>
      {!hideNavBar && <NavBar/>}
      <Outlet/>
      {!hideFooter && <Footer/>}
    </>
  )
}

export default Layout
