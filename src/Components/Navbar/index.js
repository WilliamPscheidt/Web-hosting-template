import React from 'react'
import './Navbar.css'

import SVGArrowDown from '../../Assets/Icons/Arrow-Down.svg'
import SVGMenu from '../../Assets/Icons/Menu.svg'

function Navbar() {
  return (
    <nav className='navbar-container'>
      <div className='navbar-internal'>
        <h1 className='logo'>Cyber<b className='negrito'>Host</b></h1>
        <div className='div-menus'>
          <ul className='menus'>
            <li className='option' id='active'>Início</li>
            <li className='option'>Produtos <img src={SVGArrowDown} className="icon" /></li>
            <li className='option'>Suporte</li>
          </ul>
          <button className='btn-register'>Registro</button>
          <button className='btn-login'>Login</button>
        </div>
        <div className='mobile-menu'>
          <img src={SVGMenu} className='menu-icon'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar