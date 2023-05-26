import React, { useState } from 'react'
import './registercomponent.css'
import Inputcomponent from './Inputcomponent/Inputcomponent'
import axios from 'axios'

const Registercomponent = () => {
    const [isOpenSpecialInputBox, setIsOpenSpcecialInputBox] = useState(false)

    const [Email, setEmail] = useState(null)
    const [CollegeName, setCollegeName] = useState('')
    const [ITManagerName, setITManagerName] = useState('')
    const [WebDesign, setWebDesign] = useState({ Name: '', Phone: '' })
    const [ITQuiz, setITQuiz] = useState({ Name: '', Phone: '' })
    const [Coding, setCoding] = useState({ Name: '', Phone: '' })
    const [Gaming, setGaming] = useState({ Name: '', Phone: '' })
    const [ITManager, setITManager] = useState({ Name: '', Phone: '' })
    const [ThemaDance, setThemaDance] = useState({ Name: '', Phone: '' })
    const [PaperPresentation, setPaperPresentation] = useState({ Name: '', Phone: '' })
    const [ProductLaunch, setProductLaunch] = useState({ Name: '', Phone: '' })
    const [SurpriseEvent, setSurpriseEvent] = useState({ Name: '', Phone: '' })
    const [PhotoGraphyAndVideoGraphy, setPhotoGraphyAndVideoGraphy] = useState({ Name: '', Phone: '' })


    const submitHandler = () => {
        axios.post('http://localhost:8000/registerToEvent', {
            Email, CollegeName, ITManagerName, WebDesign, ITQuiz, Coding
            , Gaming, ITManager, ThemaDance, PaperPresentation, ProductLaunch, SurpriseEvent, PhotoGraphyAndVideoGraphy
        }).then((data) => {
            console.log(data)
        }).catch((err) => console.log('err', err))
    }



    return (
        <div className='formcontainer'>
            <div className="formcontainer__header">Register</div>
            <div className="formcontainer__header-content"></div>

            <div className="formcontainer__inputbox">
                <div className='formcontainer__inputbox-box'>
                    <span >Email</span>
                    <input type="email" name='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='formcontainer__inputbox-box'>
                    <span >College Name</span>
                    <input type="text" name='CollegeName' onChange={(e) => setCollegeName(e.target.value)} />
                </div>
                <div className='formcontainer__inputbox-box'>
                    <span >IT Manager Name</span>
                    <input type="text" name='ITManagerName' onChange={(e) => setITManagerName(e.target.value)} />
                </div>
                {/* <div className='formcontainer__inputbox-multiplebox'>
                    <div>
                        <span >Email</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span >Email</span>
                        <input type="text" />
                    </div>
                </div> */}

                <Inputcomponent title='Web Designing' inputName='WebDesign' inputHandler={setWebDesign} componentState={WebDesign} />
                <Inputcomponent title='IT Quiz' inputName='ITQuiz' inputHandler={setITQuiz} componentState={ITQuiz} />
                <Inputcomponent title='Coding' inputName='Coding' inputHandler={setCoding} componentState={Coding} />
                <Inputcomponent title='Gaming' inputName='Gaming' inputHandler={setGaming} componentState={Gaming} />
                <Inputcomponent title='Thema Dance' inputName='ThemaDance' inputHandler={setThemaDance} componentState={ThemaDance} />
                <Inputcomponent title='Paper Presantation' inputName='PaperPresentation' inputHandler={setPaperPresentation} componentState={PaperPresentation} />
                <Inputcomponent title='Product Launch' inputName='ProductLaunch' inputHandler={setProductLaunch} componentState={ProductLaunch} />
                <Inputcomponent title='Surprise Event' inputName='SurpriseEvent' inputHandler={setSurpriseEvent} componentState={SurpriseEvent} />
                <Inputcomponent title='Photography and Videography' inputName='PhotoGraphyAndVideoGraphy' inputHandler={setPhotoGraphyAndVideoGraphy} componentState={PhotoGraphyAndVideoGraphy} />
                <Inputcomponent title='IT Management' inputName='ITManager' inputHandler={setITManager} componentState={ITManager} />
            </div>


            <div className='formcontainer__buttonbox-button button-red f-x-y' onClick={submitHandler}>Register</div>
        </div>
    )
}

export default Registercomponent
