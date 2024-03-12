import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
  {/* MAKING THE HEADER AND FOOTER SAME FOR ALL PAGES AND CHANGING ONLY THE MID SECTION USING OUTLET */}
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout