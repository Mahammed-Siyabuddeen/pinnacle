import React from 'react'
import { CircularProgress } from '@mui/material'
import './loadingcomponent.css'

const Loadingcomponent = () => {
    return (<>
        <div className='loadingcomponent'>
        </div>
        <div className="spinnerBox f-x-y">
            <CircularProgress sx={{ minWidth: '60px', minHeight: '60px' }} />
        </div>
    </>
    )
}

export default Loadingcomponent
