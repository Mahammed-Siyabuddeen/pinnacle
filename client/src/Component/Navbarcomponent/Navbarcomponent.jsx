import React, { useEffect, useState } from 'react'
import './navbarcomponent.css'
import { useNavigate } from 'react-router'
import { HashLink } from 'react-router-hash-link';
import { Menu, Cancel, Home, HowToReg, EmojiEvents, PermContactCalendar ,Info} from '@mui/icons-material'

const Navbarcomponent = () => {
  const navigate = useNavigate()
  const [menuButton, setMenuButton] = useState(false)

  const menuButtonHandler = () => setMenuButton(true)

  return (
    <div>

      <div className='navbar'>
        <div className="navbar__logosection">
          <div className="navbar__logosection-img">
          <img src="/images/Picture1.PNG" alt="" />
          </div>
          {/* <div className="navbar__title">St Philomena College </div> */}
        </div>
        <div className="navbar__content">
          <div className='f-x-y' onClick={() => navigate('/')}><Home />Home</div>
          <div className='f-x-y' onClick={() => navigate('/register')}><HowToReg />Register</div>
          <div className='f-x-y' ><HashLink smooth to="/#event"><EmojiEvents />Events</HashLink></div>
          <div className='f-x-y' ><HashLink smooth to="/#contact"><PermContactCalendar />Contact</HashLink></div>
          <div className='f-x-y' ><HashLink smooth to="/#about"><Info />About</HashLink></div>

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
          <div className='f-x-y' onClick={() => navigate('/')}><Home />Home</div>
          <div className='f-x-y' onClick={() => navigate('/register')}><HowToReg />Register</div>
          <div className='f-x-y' ><HashLink smooth to="/#event"><EmojiEvents />Events</HashLink></div>
          <div className='f-x-y' ><HashLink smooth to="/#contact"><PermContactCalendar />Contact</HashLink></div>
        </div>
      </div>
    </div >
  )
}

export default Navbarcomponent
