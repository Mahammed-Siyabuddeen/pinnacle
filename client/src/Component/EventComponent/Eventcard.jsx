import React from 'react'
import './eventcomponent.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Eventcard = ({ imageSrc, data }) => {
    const Navigate = useNavigate()

    const handleclick = () => {
        Navigate(`/eventdetails/${data?.name}`, { state: data })
    }
    return (
        <div onClick={handleclick} className="card">
            <div className="card__image">
                <img src={`images/${data?.imageSrc}`} alt="" className='br-8' />
            </div>
            <div className="card__title">
                <h3> {data?.Oname}</h3> 
                ({data?.name})
            </div>
            <Button variant='contained' >Read More</Button>
        </div>
    )
}

export default Eventcard



