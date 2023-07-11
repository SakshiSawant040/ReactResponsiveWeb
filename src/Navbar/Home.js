import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Services from './Services'
import Footer from './Footer'
import ServicesContent from './ServicesContent'
import TechStack from './TechStack'
function Home() {
  return (
    <div>
    <div className='Home-content'>
                  <div className="text-box">
                <h1>Satara's Biggest IT Institute Of 10 Students</h1>
                <p>Our Aim To Make Students From No Where To Some Where</p>
                <Link to='/' className='visit-btn' >Visit To Know More</Link>

            </div>
    </div>

    
    <ServicesContent/>
    <TechStack />
  

     <Footer/>
    </div>
  )
}

export default Home
