import React from 'react'
import './homeapage.css'
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
import EventComponent from '../../Component/EventComponent/EventComponent'

const Homeapage = () => {
    return (
        <div>
            <Navbarcomponent />
            <EventComponent />
        </div>
    )
}

export default Homeapage
