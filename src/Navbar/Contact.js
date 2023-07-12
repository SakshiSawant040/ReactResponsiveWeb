import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer"
import "../Navbar/Contact.css"
import { useState } from 'react'

function Contact() {

    const [name,setName] = useState('')
    const handleName= (e) =>{
      setName(e.target.value)
    }

    const [email,setEmail] = useState('')
    const handleEmail = (e) =>{
      setEmail(e.target.value)
    }

    const handleSubmit = () =>{
      if(name && email ){
      alert(`${email}                               
${name} your response is submited`)
      }

    }
  return (
    <div>

      <div className="contact-header">
        <h1>Contact-us</h1>
      </div>

      <div className="contact-form">
        <h4>*Please, Fill this form in a decent manner</h4>
        <form action="" className='form'>

          <label htmlFor="">*Name :</label><br />
          <input type="text" placeholder='' required value={name} onChange={handleName}/>
          <br />

          <label htmlFor="">*Email :</label><br />
          <input type="email" required placeholder=''  value={email} onChange={handleEmail}/>
          <br />

          <label htmlFor="">*Contact Number:</label><br />
          <input type="number" required placeholder='' />
          <br />

          <label htmlFor="">*Enquiry Details:</label><br />
          <textarea name="" id="" cols="30" rows="10" required></textarea> <br />

          <label htmlFor="">Found Us By :</label>
          <select name="options" id="options" size="3 multiple">
            <option value="">Linkedin</option>
            <option value="">Instagram</option>
            <option value="">Facebook</option>
          </select><br /><br />

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>

      <Footer/>
    </div>

  )
}

export default Contact
