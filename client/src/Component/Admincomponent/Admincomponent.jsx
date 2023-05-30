import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './admincomponent.css'
import axios from 'axios'
import Admincard from './Admincard'

const Admincomponent = () => {
    const [collegeDetails, setCollegeDetails] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        console.log('effect')
        axios.post('https://api.spcpinnacle.in/admin/getEventDetails', {}, { withCredentials: true }).then(({ data }) => {
            console.log(data.EventDetails)
            setCollegeDetails([...data.EventDetails])
        }).catch(({ response }) => {
            console.log("response", response)
            if (!response?.data?.isLogedIn) navigate('/adminlogin')
        })
    }, [])
    return (
        <div className='admincontainer'>
            <div className="admincontainer__header">College Registration Details</div>
            {
                collegeDetails.length && collegeDetails.map((elm, index) => {
                    return <Admincard data={elm} index={index} />
                })
            }
        </div>
    )
}

export default Admincomponent
