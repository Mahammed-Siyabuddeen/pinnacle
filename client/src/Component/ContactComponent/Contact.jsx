import React from 'react'
import {LocationOn,Email,Instagram} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import './Contact.css'
function Contact() {
  return (
    <div className="contact_container">
        <div>
            <h1>contact</h1>
            <div className='contact_container_logo'><LocationOn/><p>&nbsp;st philomena collge darbe,puttur</p> </div>
            <div className='contact_container_logo'><Email/><Link to='mailto:spcpinnacle2k23@gmail.com'><p>&nbsp;spcpinnacle2k23@gmail.com</p></Link> </div>
            <div className="contact_container_logo"><Instagram/><Link to='https://www.instagram.com/spcpinnacle/'><p>&nbsp;spcpinnacle</p></Link></div>
        </div>

        <div>
            <h1>pinnacle-23</h1>
            <p className='contact_container_desc'>st philomena college ,Affiliated to  Man glore University, Re-accridted by NAAC at 'A' Grade Mnanaged by the Catholic Board Of Education, Manglore </p>
            
        </div>
    </div>
  )
}

export default Contact