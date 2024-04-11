import React from 'react'
import { Route,Routes } from 'react-router-dom'
import PatientLogin from '../../patient/PatientLogin'
import PatientSignup from '../../patient/PatientSignup'
import OtpVerification from '../../patient/OtpVerification'
import Profile from '../../patient/Profile'
import Doctorlist from '../../patient/Doctorlist'

const PatientRoute = () => {
  return (
    <div>
      <Routes>
      <Route path='/patientlogin' element={<PatientLogin/>}/>
      <Route path='/patientsignup' element={<PatientSignup/>}/>
      <Route path='/otp-verification' element={<OtpVerification/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/doctorlist' element={<Doctorlist/>}/>
      </Routes>
    </div>
  )
}

export default PatientRoute
