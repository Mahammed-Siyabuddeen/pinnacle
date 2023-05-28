import React from 'react'
import './style.css'


function CoOrdinateComponent() {

    return (
        <div className='eventCordinate_container'>
            <h1> Co-Ordinates</h1>
            <div className="eventCordinate_cards" >

                <div className="cordinate" data-aos="fade-right" >
                    <img src={`/images/Faculty1.JPG`} alt="" />
                    <div className='divContent'>
                        <h2>Mr. Vinayachandra </h2>
                        <h4>Convener</h4>
                        <p>+91 9480010171</p>
                    </div>
                </div>
                
                <div className="cordinate" data-aos="fade-right" >
                    <img src={`/images/Faculty2.JPG`} alt="" />
                    <div className='divContent'>
                        <h2>Mrs. Rajeshwari M </h2>
                        <h4>Staff Co-ordinator</h4>
                        <p>+91 9980490175</p>
                    </div>
                </div>
 
                <div className="cordinate" data-aos="fade-right" >
                    <img src={`/images/Fuculty3.jpg`} alt="" />
                    <div className='divContent'>
                        <h2>Johnviston Dias </h2>
                        <h4>Student Co-ordinator</h4>
                        <p>+91 8971300681</p>
                    </div>
                </div> 
                <div className="cordinate" data-aos="fade-right" >
                    <img src={`/images/fuculty3.JPG`} alt="" />
                    <div className='divContent'>
                        <h2>Hruday S Naik</h2>
                        <h4>Student Co Co-ordinator</h4>
                        <p>+91 7259877616</p>
                    </div>
                </div> 
                <div className="cordinate" data-aos="fade-right" >
                    <img src={`/images/fuculty4.jpg`} alt="" />
                    <div className='divContent'>
                        <h2>Veeksha A</h2>
                        <h4>Student Co Co-ordinator</h4>
                        <p>+91 9980959741</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoOrdinateComponent