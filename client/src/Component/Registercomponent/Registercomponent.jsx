import React from 'react'
import './registercomponent.css'

const Registercomponent = () => {
    return (
        <div className='formcontainer'>
            <div className="formcontainer__header">Register</div>
            <div className="formcontainer__header-content"></div>

            <div className="formcontainer__inputbox">
                <div className='formcontainer__inputbox-box'>
                    <span >Email</span>
                    <input type="text" />
                </div>
                <div className='formcontainer__inputbox-box'>
                    <span >Email</span>
                    <input type="text" />
                </div>
                <div className='formcontainer__inputbox-multiplebox'>
                    <div>
                        <span >Email</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span >Email</span>
                        <input type="text" />
                    </div>
                </div>

                <div className='formcontainer__inputbox'></div>
            </div>

    
            <div className='formcontainer__buttonbox-button button-red f-x-y'>Register</div>
        </div>
    )
}

export default Registercomponent
