import React, { useState } from 'react'
import './adminLoginComponent.css'
import { useNavigate } from 'react-router'
import axios from 'axios'

const AdminLoginComponent = () => {
    const navigate = useNavigate()
    const [adminDetail, setAdminDetail] = useState({ Email: '', Password: '' })
    const inputHandler = (e) => setAdminDetail({ ...adminDetail, [e.target.name]: e.target.value })
    const [inputError, setInputError] = useState('')

    const submitHandler = () => {

        axios.post('https://api.spcpinnacle.in/admin/login', adminDetail, { withCredentials: true }).then(({ data }) => {
            console.log(data)
            if (data.isValid) navigate('/admin')
        }).catch(({ response }) => { if (response?.data?.errorMessage?.length > 0) setInputError(response.data.errorMessage) })
    }

    return (
        <div className='logincontainer'>
            <div className="logincontainer__header">Login Here </div>
            <div className='logincontainer__inputbox'>
                <div className='adminlogin__container'>
                    <span >Email</span>
                    <input type="email" name='Email' onChange={inputHandler} />
                </div>
                <div className='adminlogin__container'>
                    <span >Password</span>
                    <input type="password" name='Password' onChange={inputHandler} />
                </div>
                {inputError.length > 0 && <div className='errorText'>Error : {inputError}</div>}
                <div className='adminlogin__container-button f-x-y' onClick={submitHandler}>Login</div>
            </div>
        </div>
    )
}

export default AdminLoginComponent
