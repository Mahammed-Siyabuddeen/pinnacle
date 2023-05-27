import React from 'react'
import './homeapage.css'
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
import EventComponent from '../../Component/EventComponent/EventComponent'
import HeaderComponent from '../../Component/HeaderComponent/HeaderComponent'
import About from '../../Component/About/About'
import Portfolio from '../../Component/PortfolioComponent/Portfolio'

const Homeapage = () => {
    return (
        <div>
            <Navbarcomponent />
            <HeaderComponent/>
            <About/>
            <EventComponent />
            <Portfolio/>
        </div>
    )
}

export default Homeapage
