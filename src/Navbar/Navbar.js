import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.ico"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='navbar-content'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='links'>
        <ul>
            <li>
                <Link to='/' className='link' >Home</Link>
            </li>
            <li>
                <Link to='/About' className='link' >About</Link>
            </li>
            <li>
                <Link to='/Services' className='link'>Services</Link>
            </li>
            <li>
                <Link to="/Contact" className='link'>contact us</Link>
            </li>
        </ul>
        </div>
        <div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
