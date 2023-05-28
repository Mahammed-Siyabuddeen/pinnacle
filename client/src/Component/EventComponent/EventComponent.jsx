import React, { useEffect, useState } from 'react'
import './eventcomponent.css'
import Eventcard from './Eventcard'
import eventData from '../../data.json'
const EventComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(eventData)
    }, [])
    console.log(data.length);

    return (
        <div className='eventcontainer' id='event'>
            <h1 className="eventcontainer--header f-x-y">
                Events
            </h1>
            <div className="event__cardcontainer">
                {
                    data.map((data, index) => (

                        <Eventcard data={data} imageSrc={"Dance.png"}  index={index} />
                    ))
                }

            </div>
        </div>

    )
}

export default EventComponent
