import React from 'react'
import './HeaderComponents.css'
import { Button } from '@mui/material'
function HeaderComponent() {
  return (
    <div className='header'>
      <div className="headerContentDiv">
        <div className='headerContentDiv1' >
          <img src="images/PINNACLE 2K23 FINAL LOGO.png" alt="" />
        </div>
        <div className='headerContentDiv2'>
          <Button variant='contained'> Brochure</Button>
          <Button variant='contained'>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent