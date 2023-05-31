import React from 'react'
import './HeaderComponents.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
function HeaderComponent() {
  const brotureHandler = () => {
    window.location.href = `https://api.spcpinnacle.in/PDF/Brochure.pdf`
  }
  return (
    <div className='header'>
      <div className="headerContentDiv">
        <div className='headerContentDiv1' >
          <img src="/images/PINNACLE2K23FINALLOGO.png" alt="" />
        </div>
        <div className='headerContentDiv2'>
          <Button variant='contained' onClick={brotureHandler}> Brochure</Button>
          <Link to={'/register'}>
            <Button variant='contained'>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent