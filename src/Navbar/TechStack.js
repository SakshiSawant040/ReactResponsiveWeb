import React from 'react'
import img1 from "../images/london.png"
import img2 from "../images/newyork.png"
import img3 from "../images/washington.png"
import "../Navbar/TechStack.css"


function TechStack() {
  return (
    <div className='tech-stack'>
        <h1>Our tech Stack</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil adipisci quaerat! Corrupti alias voluptates quibusdam ducimus? Saepe ullam quae, consectetur nobis aspernatur earum provident repudiandae enim ut facere eos?</p>
        <div className="row">
            <div className="stack-col">
            <img src={img1} alt="" />
                <div className="layer">
                    <h3>REACT</h3>
                </div>
            </div>
            <div className="stack-col">
                <img src={img2} alt="" />
                <div className="layer">
                    <h3>REACT</h3>
                </div>
                
            </div>
            <div className="stack-col">
            <img src={img3} alt="" />
                <div className="layer">
                    <h3>REACT</h3>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default TechStack
