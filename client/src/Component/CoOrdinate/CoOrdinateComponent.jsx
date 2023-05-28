import React, { useEffect } from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function CoOrdinateComponent() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='eventCordinate_container'>
            <h1>Faculty co-ordinates</h1>
            <div className="eventCordinate_cards" data-aos="flip-right">

                <div className="cordinate" >
                    <img src={`http://localhost:3000/images/Dance.png`} alt="" />
                    <div>
                        <h2>jhon viston</h2>
                        <p>87905687904</p>
                    </div>
                </div>

                <div className="cordinate">
                    <img src="http://localhost:3000/images/Coding.jpg" alt="" />
                    <div>
                        <h2>jhon viston</h2>
                        <p>87905687904</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CoOrdinateComponent