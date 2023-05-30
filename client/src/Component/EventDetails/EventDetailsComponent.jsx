import React, { useEffect } from 'react'
import './style.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
function EventDetailsComponent({ data }) {
    console.log(data);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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

                        {/* <p className={"para"}>{data?.dec}</p> */}
                        <ul className='eventDetails_ul'>
                            <h3>Rules</h3>
                            {
                                data?.rules.map((data) => (
                                    <li>{data}</li>
                                ))
                            }
                        </ul>
                        <Link to={'/register'}>
                            <Button className="ButtonMargin" variant='contained'>Register</Button>
                        </Link>

                    </div>
                </div>
            </section>
            <div className='eventCordinate_container'>
                <h1>Event Heads</h1>
                <div className="eventCordinate_cards">
                    {
                        data?.coOrding.map((data) => (

                            <div className="eventCordinate_card">
                                <div>
                                    <h2>{data.name}</h2>
                                    <p>{data.phone_number}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EventDetailsComponent;