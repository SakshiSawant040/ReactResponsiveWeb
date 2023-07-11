import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import "./Navbar.css"
import aboutimg from "../images/about.jpg"
import Footer from "./Footer"

function About() {
  return (
    <div>
      <Navbar />

      <div class="about-header">
            <h1>About us</h1>
      </div>

      <div className="about-content">
            <div className="col-1">
                <h1>We are Largest IT Institute In Satara</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.blanditiis illo dolorem unde nihil, quod consectetur corporis? Ad qui voluptas, ipsum voluptate consectetur odio!</p>
                <div className="button">
                <Link to='/Services' className='btn about-btn' >Explore Now</Link>
                </div>
            </div>
            <div className="col-2">
                <img src={aboutimg} alt="img" />
            </div>
        </div>

        <div>
          <Footer/>
        </div>

    </div>
  )
}

export default About
