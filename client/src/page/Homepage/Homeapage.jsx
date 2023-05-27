import React from 'react'
import './homeapage.css'
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
import EventComponent from '../../Component/EventComponent/EventComponent'
import HeaderComponent from '../../Component/HeaderComponent/HeaderComponent'
import About from '../../Component/About/About'
import Portfolio from '../../Component/PortfolioComponent/Portfolio'
import CoOrdinateComponent from '../../Component/CoOrdinate/CoOrdinateComponent'
import Contact from '../../Component/ContactComponent/Contact'

const Homeapage = () => {
    return (
        <div>
            <Navbarcomponent />
            <HeaderComponent/>
            <About/>
            <EventComponent />
            
            <Portfolio/>
            {/* faculty co ordinate */}
            <CoOrdinateComponent/>
            {/* student cp-ordinate */}
            <CoOrdinateComponent/>

            <Contact/>
        </div>

    )
}

export default Homeapage
