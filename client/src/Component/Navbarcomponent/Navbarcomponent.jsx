import React, { useEffect, useState } from 'react'
import './navbarcomponent.css'
import { useNavigate } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Menu,Cancel}  from '@mui/icons-material'

const Navbarcomponent = () => {
  const navigate = useNavigate()
  const [menuButton, setMenuButton] = useState(false)
  // const [isUpperAnimation, setIsUpperAnimation] = useState(true)

  const menuButtonHandler = () => setMenuButton(true)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div>

      <div className='navbar'>
        <div className="navbar__logo">
          <img src="/images/Philos_Logo.png" alt="" />
        </div>
        <div className="navbar__content">
          <div className='f-x-y' onClick={() => navigate('/')} data-aos="flip-right">Home</div>
          <div className='f-x-y' onClick={() => navigate('/register')}>Register</div>
          <div className='f-x-y' onClick={() => navigate('')}>Contact</div>
          <div className='f-x-y' onClick={() => navigate('')}>Home</div>
        </div>
        <div className="navbar__menubutton f-x-y" >
          <Menu onClick={menuButtonHandler} />
        </div>
      </div>

      <div className={menuButton == true ? 'navbar__menucontent swipe--down' : 'navbar__menucontent swipe--up'}>
        <div className='navbar__menucontent-cancelbar f-x-y' >
          <div className='navbar__menucontent-cancelbar-button f-x-y'>
            <Cancel onClick={() => { setMenuButton(false) }} />
          </div>
        </div>
        <div className="navbar__menucontent-content">
          <div className='f-x-y'>Home</div>
          <div className='f-x-y'>About</div>
          <div className='f-x-y'>Service</div>
          <div className='f-x-y'>Contact</div>
        </div>
      </div>
    </div >
  )
}

export default Navbarcomponent
