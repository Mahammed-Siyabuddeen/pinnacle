import React from 'react'
import { Instagram, LinkedIn } from '@mui/icons-material';
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
function Desinger() {
    return (
        <>
            <Navbarcomponent />
            <div className='eventCordinate_container'>
                <h1>Designer</h1>
                <div className="eventCordinate_cards ">

                    <div className="eventCordinate_card designer_card">
                        <img src={`/images/designer.jpg`} alt="" />
                        <div>
                            <h2> Siyabuddeen</h2>
                            <p>+91 8792635047</p>
                        </div>
                        <div className="designer_link">
                            <a href="https://www.instagram.com/siyab._/">
                                <Instagram />
                            </a>
                            <a href="https://www.linkedin.com/in/mohd-shihab/">

                                <LinkedIn />
                            </a>
                        </div>
                    </div>

                    <div className="eventCordinate_card designer_card">
                        <img src={`/images/ds2.jpeg`} alt="" />
                        <div>
                            <h2> Irfan</h2>
                            <p>+91 6363520187</p>
                        </div>
                        <div className="designer_link">
                            <a href="https://www.instagram.com/siyab._/">
                                <Instagram />
                            </a>
                            <a href="https://www.linkedin.com/in/mohd-shihab/">

                                <LinkedIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desinger