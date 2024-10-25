import React from 'react'
import AvailableDoctors from './AvailableDoctors'

const Homepage = () => {
  return (
    <div>this is Homepage
    <AvailableDoctors
      serialNumber={1}
      profilePic="https://via.placeholder.com/100"
      name="Dr. John Doe"
      specialization="Cardiology"
      rating="4.5/5"
      age="45"
      location="New York, NY"
    />
    </div>
  )
}

export default Homepage