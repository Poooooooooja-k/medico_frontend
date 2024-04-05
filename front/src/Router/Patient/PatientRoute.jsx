import React from 'react'
import { Route,Routes } from 'react-router-dom'
import PatientLogin from '../../patient/PatientLogin'
import PatientSignup from '../../patient/PatientSignup'
import OtpVerification from '../../patient/OtpVerification'
import Profile from '../../Home/Profile'

const PatientRoute = () => {
  return (
    <div>
      <Route path='/patientlogin' element={<PatientLogin/>}/>
      <Route path='/patientsignup' element={<PatientSignup/>}/>
      <Route path='/otp-verification' element={<OtpVerification/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    
    </div>
  )
}

export default PatientRoute
