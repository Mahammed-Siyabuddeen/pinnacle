import React, { useState } from 'react'
import './registercomponent.css'
import Inputcomponent from './Inputcomponent/Inputcomponent'

const Registercomponent = () => {
    const [isOpenSpecialInputBox, setIsOpenSpcecialInputBox] = useState(false)

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

                <Inputcomponent title='Web Designing' />
                <Inputcomponent title='IT Quiz' />
                <Inputcomponent title='Coding' />
                <Inputcomponent title='Web Designing' />
                <Inputcomponent title='Thema Dance' />
                <Inputcomponent title='Paper Presantation' />
                <Inputcomponent title='IT Management' />
                <Inputcomponent title='Product Managemnt' />
                <Inputcomponent title='Surprise Event' />
                <Inputcomponent title='Photography and Videography' />
                <Inputcomponent title='IT Management' />
                <Inputcomponent title='Gaming' />
            </div>


            <div className='formcontainer__buttonbox-button button-red f-x-y'>Register</div>
        </div>
    )
}

export default Registercomponent
