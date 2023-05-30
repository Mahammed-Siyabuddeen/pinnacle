import React, { useState } from 'react'
import { ExpandCircleDown, ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material'

const Inputcomponent = ({ title, inputName, inputHandler,inputHandler1,inputHandler2,inputHandler3,inputHandler4,inputHandler5, componentState,componentState1,componentState2,componentState3,componentState4,componentState5, member2, member6 }) => {
    const [isOpenSpecialInputBox, setIsOpenSpcecialInputBox] = useState(false)
    return (
        <div className='formcontainer__inputbox-speacialbox'>
            <div className='formcontainer__inputbox-speacialbox-header' onClick={() => setIsOpenSpcecialInputBox(!isOpenSpecialInputBox)}>
                <span>{title}</span>
                {!isOpenSpecialInputBox ? <span className='f-x-y'><ArrowCircleDown /></span> : <span className='f-x-y'><ArrowCircleUp /></span>}
            </div>

            {isOpenSpecialInputBox &&
                (

                    <div className='formcontainer__inputbox-speacialbox-inputbox'>
                        <div>
                            <span>Participant Name {member2 || member6? '1':''}</span>
                            <input type="text" name='Name' onChange={(e) => inputHandler({ ...componentState, [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input type="tel" name='Phone' onChange={(e) => inputHandler({ ...componentState, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                )
            }

            {isOpenSpecialInputBox && member2 &&
                (

                    <div className='formcontainer__inputbox-speacialbox-inputbox'>
                        <div>
                            <span>Participant Name 2</span>
                            <input type="text" name='Name' onChange={(e) => inputHandler1({ ...componentState1, [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input type="tel" name='Phone' onChange={(e) => inputHandler1({ ...componentState1, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                )
            }

            {isOpenSpecialInputBox && member6 &&
                (
                    <>
                    <div className='formcontainer__inputbox-speacialbox-inputbox'>
                        <div>
                            <span>Participant Name-2</span>
                            <input type="text" name='Name' onChange={(e) => inputHandler1({ ...componentState1, [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input type="tel" name='Phone' onChange={(e) => inputHandler1({ ...componentState1, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className='formcontainer__inputbox-speacialbox-inputbox'>
                        <div>
                            <span>Participant Name-3</span>
                            <input type="text" name='Name' onChange={(e) => inputHandler2({ ...componentState2, [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input type="tel" name='Phone' onChange={(e) => inputHandler2({ ...componentState2, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className='formcontainer__inputbox-speacialbox-inputbox'>
                        <div>
                            <span>Participant Name-4</span>
                            <input type="text" name='Name' onChange={(e) => inputHandler3({ ...componentState3, [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input type="tel" name='Phone' onChange={(e) => inputHandler3({ ...componentState3, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className='formcontainer__inputbox-speacialbox-inputbox'>
                        <div>
                            <span>Participant Name-5</span>
                            <input type="text" name='Name' onChange={(e) => inputHandler4({ ...componentState4, [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input type="tel" name='Phone' onChange={(e) => inputHandler4({ ...componentState4, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className='formcontainer__inputbox-speacialbox-inputbox'>
                        <div>
                            <span>Participant Name-6</span>
                            <input type="text" name='Name' onChange={(e) => inputHandler5({ ...componentState5, [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input type="tel" name='Phone' onChange={(e) => inputHandler5({ ...componentState5, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    </>

                )
            }
        </div>
    )
}

export default Inputcomponent
