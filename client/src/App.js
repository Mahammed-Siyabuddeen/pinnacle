import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homeapage from './page/Homepage/Homeapage'
import Registerpage from './page/Registepage/Registerpage'
import Adminloginpage from './page/Adminloginpage/Adminloginpage'
import EventDetails from './page/EventDetailsPage/EventDetails'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homeapage />} />
          <Route exact path='/register' element={<Registerpage />} />
          <Route exact path='/adminlogin' element={<Adminloginpage />} />
          <Route  exact  path='/eventdetails' element={<EventDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
