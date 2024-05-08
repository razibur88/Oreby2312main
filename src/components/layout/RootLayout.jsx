import React from 'react'
import Navbar from '../Navbar'
import Menu from '../Menu'
import {Outlet} from "react-router-dom"
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Menu/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout