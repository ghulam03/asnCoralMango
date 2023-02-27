import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
import React from 'react'

function Layout(props) {
  return (
    <>
    <Header/>
    <NavBar/>
    <main>{props.children}</main>
    <Footer/>
    </>
  )
}

export default Layout