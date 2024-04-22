import React from 'react'
import { Route,Routes } from 'react-router-dom'
import PatientLogin from '../../patient/PatientLogin'
import PatientSignup from '../../patient/PatientSignup'
import OtpVerification from '../../patient/OtpVerification'
import Profile from '../../patient/Profile'
import Doctorlist from '../../patient/Doctorlist'
import HomePage from '../../patient/HomePage'
import Blog from '../../patient/Blog'
import Payment from '../../patient/Payment'
import PatientProtectedRoute from './PatientProtectedRoute'
import DocSlot from '../../patient/DocSlot'

const PatientRoute = () => {
  return (
    <div>
      <Routes>
      <Route path='/patientlogin' element={<PatientLogin/>}/>
      <Route path='/patientsignup' element={<PatientSignup/>}/>
      <Route path='/otp-verification' element={<OtpVerification/>}/>
      <Route path='/Profile' element={<PatientProtectedRoute element={Profile}/>} ></Route>
      <Route path='/doctorlist'element={<PatientProtectedRoute element={Doctorlist}/>} ></Route>
      <Route path='/homepage' element={<PatientProtectedRoute element={HomePage}/>} ></Route>
      <Route path='/blog' element={<PatientProtectedRoute element={Blog}/>} ></Route>
      <Route path='/payment' element={<PatientProtectedRoute element={Payment}/>} ></Route>
      <Route path='/docslot/' element={<DocSlot/>}/>
    </Routes>
    </div>
  )
}
export default PatientRoute
