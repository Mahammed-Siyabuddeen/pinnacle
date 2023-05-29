import React from 'react'
import { LocationOn, Email, Instagram } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './Contact.css'
import { Button } from '@mui/material'
function Contact() {
  return (
    <div id="contact" className="contact_container">
      <div>
        <h1>Contact Us</h1>
        <div className='contact_container_logo'><LocationOn /><p>&nbsp;St Philomena College Puttur</p> </div>
        <div className='contact_container_logo'><Email /><Link to='mailto:spcpinnacle2k23@gmail.com'><p>&nbsp;spcpinnacle2k23@gmail.com</p></Link> </div>
        <div className="contact_container_logo"><Instagram /><Link to='https://www.instagram.com/spcpinnacle/'><p>&nbsp;spcpinnacle</p></Link></div>
      </div>

      <div>
        <h1>PINNACLE 2K23</h1>
        <Button variant="contained">Wednesday, 07 June, 2023</Button>
        <p className='contact_container_desc'>
          St Philomena College, Philonagar, Darbe - 574202, Puttur, D.K., Karnataka | 08251 230340 | 9901380340   info@spcputtur.ac.in | www.spcputtur.ac.in
        </p>

      </div>
      <div className='contact_logo'>
      <img src="/images/Philos_Logo.png" alt="" />

      </div>
    </div>
  )
}

export default Contact