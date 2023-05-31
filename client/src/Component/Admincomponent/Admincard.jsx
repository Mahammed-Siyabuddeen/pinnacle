import React, { useState } from 'react'
import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material'
import { Button } from '@mui/material'

const Admincard = ({ data, index }) => {
    const [showDetail, setShowDetail] = useState(false)
    console.log('card')
    const downloadHandler = () => {
        window.location.href = `https://api.spcpinnacle.in/EventPdf/${data?.PdfUrl}`

    }
    return (
        <div className="admincontainer__content-box">
            <div className="admincontainer_content-box-header" onClick={() => { setShowDetail(!showDetail) }}>
                <p>{index + 1}</p>
                <h2>{data.CollegeName}</h2>
                <Button className='btn' variant='contained' onClick={downloadHandler}>Download</Button>
                <span>{!showDetail ? <ArrowCircleDown /> : <ArrowCircleUp />}</span>
            </div>
            {showDetail &&
                <div className='admincontainer__header-box-content'>
                    <h3>Student Incharger Name {data.ITManagerName}</h3>
                    <h3>Conatct Detail {data.Email}</h3>
                </div>
            }
        </div>
    )
}

export default Admincard
