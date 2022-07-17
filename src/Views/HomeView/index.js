import React from 'react'
import './HomeView.css'
import Navbar from '../../Components/Navbar'
import HomeInfos from '../../Components/HomeInfos'
import Domains from '../../Components/Domains'
import Products from '../../Components/Products'
import Blog from '../../Components/Blog'
import Footer from '../../Components/Footer'

function HomeView() {
  return (
    <>
      <div className='container'>
        <Navbar></Navbar>
        <HomeInfos></HomeInfos>
        <Domains></Domains>
        <Products></Products>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </>
  )
}

export default HomeView