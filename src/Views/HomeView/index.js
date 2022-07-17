import React from 'react'
import './HomeView.css'
import Navbar from '../../Components/Navbar'
import HomeInfos from '../../Components/HomeInfos'
import Domains from '../../Components/Domains'
import Products from '../../Components/Products'

function HomeView() {
  return (
    <>
      <div className='container'>
        <Navbar></Navbar>
        <HomeInfos></HomeInfos>
        <Domains></Domains>
        <Products></Products>
      </div>
    </>
  )
}

export default HomeView