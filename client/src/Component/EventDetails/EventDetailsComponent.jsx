import React from 'react'
import './style.css'
import BadgeIcon from '@mui/icons-material/Badge';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Button } from '@mui/material';
function EventDetailsComponent() {
    return (
        // <div className='event-maincontainer'>
        //     <div>Event Details</div>
        //     <div className="eventcontainer">
        //      <div className="divImage">
        //         <img src="images/Coding.jpg" alt="" />
        //      </div>
        //     </div>

        // </div>
        <div>

            <section id='' className={"EventDetailscontainer"}>
                <h1>Event Details</h1>
                <div className={"subContainer"}>
                    <div className={"profile"}>
                        <img src={'images/Coding.jpg'} alt="" />
                    </div>
                    <div className={"details"}>

                        <p className={"para"}> .
                            Web Dynamo is an exciting event that provides a platform for web designing enthusiasts to showcase their skills and creativity.
                            This event is perfect for those who are passionate about web designing, user experience, and creativity
                        </p>
                        <ul className='eventDetails_ul'>
                            <li>Knowledge of HTML,CSS must</li>
                            <li>Individual Event</li>
                            <li>Round details will be given on spot</li>
                        </ul>
                        <Button className="ButtonMargin" variant='contained'>Register</Button>
                       
                    </div>
                </div>
            </section>
                <div className='eventCordinate_container'>
                    <h1>Event co-ordinates</h1>
                    <div className="eventCordinate_cards">

                        <div className="eventCordinate_card">
                            <img src="images/Coding.jpg" alt="" />
                            <div>
                              <h2>jhon viston</h2>
                              <p>jhine@gmail.com</p>
                              <p>87905687904</p>
                            </div>
                        </div>

                        <div className="eventCordinate_card">
                            <img src="images/Coding.jpg" alt="" />
                            <div>
                              <h2>jhon viston</h2>
                              <p>jhine@gmail.com</p>
                              <p>87905687904</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default EventDetailsComponent