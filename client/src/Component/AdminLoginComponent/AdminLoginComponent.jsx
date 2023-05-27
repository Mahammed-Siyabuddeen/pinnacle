import React, { useState } from 'react'
import './adminLoginComponent.css'
import { useNavigate } from 'react-router'
import axios from 'axios'

const AdminLoginComponent = () => {
    const navigate = useNavigate()
    const [adminDetail, setAdminDetail] = useState({ Email: '', Password: '' })
    const inputHandler = (e) => setAdminDetail({ ...adminDetail, [e.target.name]: e.target.value })
    const [error, setError] = useState('')

    const submitHandler = () => {
        axios.post('http://localhost:8000/admin/login', adminDetail).then(({ data }) => {
            console.log(data)
            if (data.isValid) navigate('/admindashboard')
        }).catch(({ response }) => { setError(response.data.errorMessage);console.log(response.data.errorMessage);  })
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
                {!error == null && <div className='errorText'>Error : email is not matched</div>}
                <div className='adminlogin__container-button f-x-y' onClick={submitHandler}>Login</div>
            </div>
        </div>
    )
}

export default AdminLoginComponent
