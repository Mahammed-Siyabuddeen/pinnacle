import React, { useState } from 'react'
import './registercomponent.css'
import Inputcomponent from './Inputcomponent/Inputcomponent'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Loadingcomponent from '../Loadingcomponent/Loadingcomponent'

const Registercomponent = () => {
    const [isOpenSpecialInputBox, setIsOpenSpcecialInputBox] = useState(false)
    const navigate = useNavigate()
    const [Email, setEmail] = useState('')
    const [CollegeName, setCollegeName] = useState('')
    const [ITManagerName, setITManagerName] = useState('')
    const [ITManagerNumber, setITManagerNumber] = useState('')
    const [WebDesign, setWebDesign] = useState({ Name: '', Phone: '' })
    const [ITQuiz, setITQuiz] = useState({ Name: '', Phone: '' })
    const [ITQuiz1, setITQuiz1] = useState({ Name: '', Phone: '' })
    const [Coding, setCoding] = useState({ Name: '', Phone: '' })
    const [Gaming, setGaming] = useState({ Name: '', Phone: '' })
    const [Gaming1, setGaming1] = useState({ Name: '', Phone: '' })
    const [ITManager, setITManager] = useState({ Name: '', Phone: '' })
    const [PaperPresentation, setPaperPresentation] = useState({ Name: '', Phone: '' })
    const [ProductLaunch, setProductLaunch] = useState({ Name: '', Phone: '' })
    const [ProductLaunch1, setProductLaunch1] = useState({ Name: '', Phone: '' })
    const [SurpriseEvent, setSurpriseEvent] = useState({ Name: '', Phone: '' })
    const [PhotoGraphyAndVideoGraphy, setPhotoGraphyAndVideoGraphy] = useState({ Name: '', Phone: '' })
    const [PhotoGraphyAndVideoGraphy1, setPhotoGraphyAndVideoGraphy1] = useState({ Name: '', Phone: '' })
    const [ThemaDance, setThemaDance] = useState({ Name: '', Phone: '' })
    const [ThemaDance1, setThemaDance1] = useState({ Name: '', Phone: '' })
    const [ThemaDance2, setThemaDance2] = useState({ Name: '', Phone: '' })
    const [ThemaDance3, setThemaDance3] = useState({ Name: '', Phone: '' })
    const [ThemaDance4, setThemaDance4] = useState({ Name: '', Phone: '' })
    const [ThemaDance5, setThemaDance5] = useState({ Name: '', Phone: '' })
    const [inputError, setInputError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = () => {
        setIsLoading(true)
        if (isCorrectInput()) {

            axios.post('https://api.spcpinnacle.in/registerToEvent', {
                Email, CollegeName, ITManagerName,ITManagerNumber, WebDesign, ITQuiz, ITQuiz1, Coding
                , Gaming, Gaming1, ITManager, ThemaDance, ThemaDance1, ThemaDance2, ThemaDance3, ThemaDance4, ThemaDance5, PaperPresentation, ProductLaunch, ProductLaunch1, SurpriseEvent, PhotoGraphyAndVideoGraphy,PhotoGraphyAndVideoGraphy1
            }).then(({ data }) => {
                console.log(data)
                if (data.isValid) navigate(`/download/${data.pdfUrl}`)
            }).catch(({ response }) => {
                setIsLoading(false)
                if (response?.data?.errorMessage?.length > 0) setInputError(response.data.errorMessage)
            }
            )
        }
        else setIsLoading(false)
    }

    const isCorrectInput = () => {
        const validInput = Email.length > 0 && CollegeName.length > 0 && ITManagerName.length > 0
        if (Email.length < 1) setInputError('Please Enter the E-mail')
        else if (CollegeName.length < 1) setInputError('Please Enter the College Name')
        else if (ITManagerName.length < 1) setInputError('Please Enter the Student In-charge Name')
        else if (ITManagerNumber.length<1) setInputError(" Please Enter the Student In-charge Number")
        else setInputError('')
        return validInput
    }



    return (<>
        {isLoading && <Loadingcomponent />}
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
                    <span >Student In-charge Name</span>
                    <input type="text" name='ITManagerName' onChange={(e) => setITManagerName(e.target.value)} />
                </div>
                <div className='formcontainer__inputbox-box'>
                    <span >Student In-charge Contact Number</span>
                    <input type="text" name='ITManagerName' onChange={(e) => setITManagerNumber(e.target.value)} />
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
                <Inputcomponent title='IT Quiz' inputName='ITQuiz' inputHandler={setITQuiz} inputHandler1={setITQuiz1} componentState={ITQuiz} componentState1={ITQuiz1} member2={true} />
                <Inputcomponent title='Coding' inputName='Coding' inputHandler={setCoding} componentState={Coding} />
                <Inputcomponent title='Gaming' inputName='Gaming' inputHandler={setGaming} inputHandler1={setGaming1} componentState={Gaming} componentState1={Gaming1} member2={true} />
                <Inputcomponent title='Paper Presentation' inputName='PaperPresentation' inputHandler={setPaperPresentation} componentState={PaperPresentation} />
                <Inputcomponent title='Product Launch' inputName='ProductLaunch' inputHandler={setProductLaunch} inputHandler1={setProductLaunch1} componentState={ProductLaunch} componentState1={ProductLaunch1} member2={true} />
                <Inputcomponent title='Surprise Event' inputName='SurpriseEvent' inputHandler={setSurpriseEvent} componentState={SurpriseEvent} />
                <Inputcomponent title='Photography and Videography' inputName='PhotoGraphyAndVideoGraphy' inputHandler={setPhotoGraphyAndVideoGraphy} inputHandler1={setPhotoGraphyAndVideoGraphy1} componentState={PhotoGraphyAndVideoGraphy} componentState1={PhotoGraphyAndVideoGraphy1} member2={true} />
                <Inputcomponent title='IT Manager' inputName='ITManager' inputHandler={setITManager} componentState={ITManager} />
                <Inputcomponent title='Dance' inputName='ThemaDance' inputHandler={setThemaDance} inputHandler1={setThemaDance1} inputHandler2={setThemaDance2} inputHandler3={setThemaDance3} inputHandler4={setThemaDance4} inputHandler5={setThemaDance5} componentState={ThemaDance} componentState1={ThemaDance1} componentState2={ThemaDance2} componentState3={ThemaDance3} componentState4={ThemaDance4} componentState5={ThemaDance5} member6={true} />
            </div>

            {inputError.length > 0 && <div className='errorText'>input error {inputError} </div>}
            <div className='formcontainer__buttonbox-button button-red f-x-y' onClick={submitHandler}>Register</div>
        </div>
    </>
    )
}

export default Registercomponent
