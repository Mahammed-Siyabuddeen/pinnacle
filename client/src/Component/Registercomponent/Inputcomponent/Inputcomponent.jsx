import React, { useState } from 'react'
import { ExpandCircleDown, ArrowCircleDown,ArrowCircleUp } from '@mui/icons-material'

const Inputcomponent = ({ title, inputName, inputHandler, componentState }) => {
    const [isOpenSpecialInputBox, setIsOpenSpcecialInputBox] = useState(false)
    return (
        <div className='formcontainer__inputbox-speacialbox'>
            <div className='formcontainer__inputbox-speacialbox-header' onClick={() => setIsOpenSpcecialInputBox(!isOpenSpecialInputBox)}>
                <span>{title}</span>
                {!isOpenSpecialInputBox ? <span className='f-x-y'><ArrowCircleDown /></span> : <span className='f-x-y'><ArrowCircleUp /></span>}
            </div>

            {isOpenSpecialInputBox &&
                <div className='formcontainer__inputbox-speacialbox-inputbox'>
                    <div>
                        <span>Name</span>
                        <input type="text" name='Name' onChange={(e) => inputHandler({ ...componentState, [e.target.name]: e.target.value })} />
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <input type="tel" name='Phone' onChange={(e) => inputHandler({ ...componentState, [e.target.name]: e.target.value })} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Inputcomponent
