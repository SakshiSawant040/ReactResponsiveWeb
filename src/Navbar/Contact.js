import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <div>
      <Navbar/>

      <div className="contact-header">
        <h1>Contact-us</h1>
      </div>

      <div className="form">
      <h2>Enquiry Form</h2>
        <form action="" className='form-content'>

          <div className=''>
          <label htmlFor="">Enter Name :</label> 
          <input type="text" placeholder='' />
          </div>

          <div className=''>
            <label htmlFor="">Enter Email :</label> 
            <input type="text" placeholder='' />
          </div>

          <div className=''>
            <label htmlFor="">Enter Mobile Number :</label> 
            <input type="number" name="" id="" />
          </div>
          <div className=''>
            <label htmlFor="">Submit Response:</label> 
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div><button>Submit</button></div>

        </form>
      </div>
    </div>
  )
}

export default Contact
