import React from 'react'
import './eventcomponent.css'
import {Button} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'

const Eventcard = ({ imageSrc }) => {
    const Navigate=useNavigate()

    const handleclick=()=>{
        Navigate('/eventdetails/345',{state:{img:imageSrc,name:'web design'}})
    }
    return (
        <div onClick={handleclick}  className="card">
            <div className="card__image">
                <img src={`images/${imageSrc}`} alt="" className='br-8' />
            </div>
            <div className="card__title">
                Web Designing
            </div>

            {/* <div className="card__button">
                Raad more
            </div> */}
            <Button variant='contained' >Read More</Button>
        </div>
    )
}

export default Eventcard



