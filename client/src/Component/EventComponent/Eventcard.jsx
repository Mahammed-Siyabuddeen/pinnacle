import React from 'react'
import './eventcomponent.css'
import {Button} from '@mui/material'
const Eventcard = ({ imageSrc }) => {
    return (
        <div className="card">
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
