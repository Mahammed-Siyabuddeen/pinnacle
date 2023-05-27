import { Button } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
import './registercomponent.css'

const Downloadpage = () => {
    const { id } = useParams()
    console.log('downlaod id ', id)

    const downloadButtonHandler = () => {
        window.location.href = `http://localhost:8000/EventPdf/${id}`
    }
    return (
        <div >
            <Navbarcomponent />
            <div className='downloadconatainer'>
                <h1>THANK YOU FOR REGISTERING<br></br>Your Response had been Recorded</h1>
                <h2>Please Download the Consent Letter and get it signed by your Prinicipal</h2>
                <Button variant='contained' onClick={downloadButtonHandler}>Download</Button>
            </div>
        </div>
    )
}

export default Downloadpage