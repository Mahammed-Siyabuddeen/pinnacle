
import React from 'react'
import Navbarcomponent from '../../Component/Navbarcomponent/Navbarcomponent'
import EventDetailsComponent from '../../Component/EventDetails/EventDetailsComponent'
import { useLocation } from 'react-router-dom'

function EventDetails() {
  const location=useLocation()
console.log(location.state);
  return (
    <div>
      <Navbarcomponent/>
      <EventDetailsComponent data={location?.state}/>
    </div>

  )
}

export default EventDetails