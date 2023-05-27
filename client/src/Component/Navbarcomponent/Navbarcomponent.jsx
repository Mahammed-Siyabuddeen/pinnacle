import React, { useState } from 'react'
import './navbarcomponent.css'
import { useNavigate } from 'react-router'

const Navbarcomponent = () => {
  const navigate = useNavigate()
  const [menuButton, setMenuButton] = useState(false)
  // const [isUpperAnimation, setIsUpperAnimation] = useState(true)

  const menuButtonHandler = () => setMenuButton(true)

  return (
    <div>

      <div className='navbar'>
        <div className="navbar__logo">
          <img src="/images/Philos_Logo.png" alt="" />
        </div>
        <div className="navbar__content">
          <div className='f-x-y' onClick={() => navigate('/')}>Home</div>
          <div className='f-x-y' onClick={() => navigate('/register')}>Register</div>
          <div className='f-x-y' onClick={() => navigate('')}>Contact</div>
          <div className='f-x-y' onClick={() => navigate('')}>Home</div>
        </div>
        <div className="navbar__menubutton" onClick={menuButtonHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={menuButton == true ? 'navbar__menucontent swipe--down' : 'navbar__menucontent swipe--up'}>
        <div className='navbar__menucontent-cancelbar f-x-y' onClick={() => { setMenuButton(false) }}>
          <div className='navbar__menucontent-cancelbar-button'>
            X
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
