import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homeapage from './page/Homepage/Homeapage'
import Registerpage from './page/Registepage/Registerpage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homeapage />} />
          <Route exact path='/register' element={<Registerpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
