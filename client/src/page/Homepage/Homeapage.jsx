import React from 'react'
import './homeapage.css'
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
import EventComponent from '../../Component/EventComponent/EventComponent'
import HeaderComponent from '../../Component/HeaderComponent/HeaderComponent'

const Homeapage = () => {
    return (
        <div>
            <Navbarcomponent />
            <HeaderComponent/>
            <EventComponent />
        </div>
    )
}

export default Homeapage
