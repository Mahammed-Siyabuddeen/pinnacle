import React from 'react'
import './eventcomponent.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Eventcard = ({ imageSrc, data, index }) => {
    const Navigate = useNavigate()

    const handleclick = () => {
        Navigate(`/eventdetails/${data?.name}`, { state: data })
    }
    return (
        <div onClick={handleclick} className="card" data-aos={index % 2 == 0 ? "fade-right" : "fade-left"} >
            <div className="card__image">
                <img src={`images/${data?.imageSrc}`} alt="" className='br-8' />
            </div>
            <div className="card__title">
                {data?.name}
            </div>
            <Button variant='contained' >Read More</Button>
        </div>
    )
}

export default Eventcard



