import React, { useEffect } from 'react'
import './style.css'


function CoOrdinateComponent() {
 
    return (
        <div className='eventCordinate_container'>
            <h1>Faculty co-ordinates</h1>
            <div className="eventCordinate_cards" >

                <div className="cordinate" data-aos="fade-right" >
                    <img src={`/images/Dance.jpg`} alt="" />
                    <div>
                        <h2>jhon viston</h2>
                        <p>87905687904</p>
                    </div>
                </div>

                <div className="cordinate" data-aos="fade-left">
                    <img src="/images/Coding.jpg" alt="" />
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