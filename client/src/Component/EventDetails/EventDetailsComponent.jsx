import React from 'react'
import './style.css'
import BadgeIcon from '@mui/icons-material/Badge';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Button } from '@mui/material';
function EventDetailsComponent({ data }) {
    console.log(data);
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
                <h1>{data?.name}</h1>
                <div className={"subContainer"}>
                    <div className={"profile"}>
                        <img src={`/images/${data?.imageSrc}`} alt="" />
                    </div>
                    <div className={"details"}>

                        <p className={"para"}>{data?.dec}</p>
                        <ul className='eventDetails_ul'>
                            <h3>Rules</h3>
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
                        {/* <img src={`/images/${data?.img}`} alt="" /> */}
                        <div>
                            <h2>jhon viston</h2>
                            <p>jhine@gmail.com</p>
                            <p>87905687904</p>
                        </div>
                    </div>
                    <div className="eventCordinate_card">
                        {/* <img src={`/images/Coding.jpg`} alt="" /> */}
                        <div>
                            <h2>jhon vistn</h2>
                            <p>jhine@gmail.com</p>
                            <p>87905687904</p>
                        </div>
                    </div>

                    <div className="eventCordinate_card">
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

export default EventDetailsComponent;