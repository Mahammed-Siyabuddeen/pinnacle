import React from 'react'
import './adminLoginComponent.css'

const AdminLoginComponent = () => {
    // const []= 

    return (
        <div className='logincontainer'>
            <div className="logincontainer__header">Login Here </div>
            <div className='logincontainer__inputbox'>
                <div className='adminlogin__container'>
                    <span >Email</span>
                    <input type="email" name='Email' />
                </div>
                <div className='adminlogin__container'>
                    <span >Password</span>
                    <input type="email" name='Email' />
                </div>
            </div>
        </div>
    )
}

export default AdminLoginComponent
