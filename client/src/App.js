import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homeapage from './page/Homepage/Homeapage'
import Registerpage from './page/Registepage/Registerpage'
<<<<<<< HEAD
import Adminloginpage from './page/Adminloginpage/Adminloginpage'
=======
import EventDetails from './page/EventDetailsPage/EventDetails'
>>>>>>> 448587933e41ad9a66b938d78c82fd28afd01ba7

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homeapage />} />
          <Route exact path='/register' element={<Registerpage />} />
<<<<<<< HEAD
          <Route exact path='/adminlogin' element={<Adminloginpage />} />
=======
          <Route  exact  path='/eventdetails' element={<EventDetails/>}/>
>>>>>>> 448587933e41ad9a66b938d78c82fd28afd01ba7
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
