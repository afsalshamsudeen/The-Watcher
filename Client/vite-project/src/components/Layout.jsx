import React from 'react'
import { Outlet, useLocation} from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const hideNavBar = pathname ==="/" || pathname === "/login" || pathname === "/signup";
    const hideFooter = pathname ==="/login" || pathname ==="/signup"
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
