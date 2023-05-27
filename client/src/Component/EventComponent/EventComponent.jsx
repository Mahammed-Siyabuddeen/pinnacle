import React, { useEffect, useState } from 'react'
import './eventcomponent.css'
import Eventcard from './Eventcard'
import eventData from '../../data.json'
const EventComponent = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
     setData(eventData)
    },[])
    console.log(data.length);

    return (
        <div className='eventcontainer'>
            <h1 className="eventcontainer--header f-x-y">
                Events
            </h1>
            <div className="event__cardcontainer">
                 {
                    data.map((data)=>(

                        <Eventcard data={data} imageSrc={"Dance.png"} />
                    ))
                 }
                
            </div>
        </div>

    )
}

export default EventComponent
