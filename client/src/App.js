import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homeapage from './page/Homepage/Homeapage'
import Registerpage from './page/Registepage/Registerpage'
import Adminloginpage from './page/Adminloginpage/Adminloginpage'
import EventDetails from './page/EventDetailsPage/EventDetails'
import Downloadpage from './page/Downloadpage/Downloadpage'
import Adminpage from './page/Adminpage/Adminpage'
import Desinger from './page/Designer/Desinger'
import DesignerComponent from './Component/DesignerComponent/DesignerComponent'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/hello:'  */}
          <Route exact path='/' element={<Homeapage />} />
          <Route exact path='/register' element={<Registerpage />} />
          <Route exact path='/adminlogin' element={<Adminloginpage />} />
          <Route exact path='/admin' element={<Adminpage />} />
          <Route exact path='/download/:id' element={<Downloadpage />} />
          <Route exact path='/eventdetails' element={<EventDetails />} />
          <Route path='/eventdetails/:eventname' element={<EventDetails />} />
          <Route path='/designer' element={<Desinger/>}/>
        </Routes>
      </BrowserRouter>
      <DesignerComponent/>
    </div>
  )
}

export default App
