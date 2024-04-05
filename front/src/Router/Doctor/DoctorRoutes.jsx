import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DoctorLogin from '../../doctor/DoctorLogin'
import DocOtpVerification from '../../doctor/DocOtpVerification'
import DoctorSignup from '../../doctor/DoctorSignup'
import DocDashboard from '../../doctor/DocDashboard'
const DoctorRoutes = () => {
  return (
    <div>
       <Route path='/doctorlogin' element={<DoctorLogin/>}/>
       <Route path='/docotp-verification' element={<DocOtpVerification/>}/>
       <Route path='/doctorsignup' element={<DoctorSignup/>}/>
       <Route path='/docDashboard' element={<DocDashboard/>}/>
     
    </div>
  )
}

export default DoctorRoutes
