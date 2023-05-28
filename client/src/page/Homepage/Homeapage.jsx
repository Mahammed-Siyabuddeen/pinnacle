import React,{useEffect} from 'react'
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
import EventComponent from '../../Component/EventComponent/EventComponent'
import HeaderComponent from '../../Component/HeaderComponent/HeaderComponent'
import About from '../../Component/About/About'
import Portfolio from '../../Component/PortfolioComponent/Portfolio'
import CoOrdinateComponent from '../../Component/CoOrdinate/CoOrdinateComponent'
import Contact from '../../Component/ContactComponent/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Generalnstruction from '../../Component/Generalnstruction/Generalnstruction'

const Homeapage = () => {
    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])
    return (
        <div>
            <Navbarcomponent />
            <HeaderComponent/>
            <About/>
            <EventComponent />
            
            <Portfolio/>
            <CoOrdinateComponent/>
            <Generalnstruction/>
            <Contact/>
        </div>

    )
}

export default Homeapage
