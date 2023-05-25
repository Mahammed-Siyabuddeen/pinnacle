import React from 'react'
import './eventcomponent.css'
import Eventcard from './Eventcard'

const EventComponent = () => {
    return (
        <div className='eventcontainer'>
            <h1 className="eventcontainer--header f-x-y">
                Events
            </h1>
            <div className="event__cardcontainer">
                <Eventcard imageSrc='Coding.jpg' />
                <Eventcard imageSrc='Dance.png' />
                <Eventcard imageSrc='Gaming.png' />
                <Eventcard imageSrc='PaperPresentation.png' />
                <Eventcard imageSrc='ITManager.jpg' />
                <Eventcard imageSrc='Phtography.jpg' />
                <Eventcard imageSrc='ProductLaunch.jpg' />
                <Eventcard imageSrc='Surpriseevent.jpg' />
                <Eventcard imageSrc='WebDesigning.png' />
            </div>
        </div>

    )
}

export default EventComponent
