import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";
// Outlet uses this layout as a base nd keep same things in both up ND DOWN\

function Layout() {
  return (
   <>

   {/* When we use outlet then header and footer will be same  nd can make chnages in Outlet*/}
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout