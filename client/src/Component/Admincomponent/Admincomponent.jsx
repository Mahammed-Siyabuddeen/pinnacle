import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './admincomponent.css'
import axios from 'axios'

const Admincomponent = () => {
    const navigate = useNavigate()
    useEffect(() => {
        console.log('effect')
        axios.post('http://localhost:8000/admin/getEventDetails', {}, { withCredentials: true }).then(({ data }) => {
            console.log(data)
        }).catch(({ response }) => {
            if (!response?.data?.isLogedIn) navigate('/adminlogin')
        })
    }, [])
    return (
        <div>

        </div>
    )
}

export default Admincomponent
