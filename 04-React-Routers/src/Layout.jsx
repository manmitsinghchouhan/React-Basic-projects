import React from 'react'
import Header from './component/Header/Header'
import { Outlet } from 'react-router'
import Footer from './component/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
