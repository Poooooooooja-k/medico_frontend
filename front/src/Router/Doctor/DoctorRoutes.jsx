import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DoctorLogin from '../../doctor/DoctorLogin'
import DocOtpVerification from '../../doctor/DocOtpVerification'
import DoctorSignup from '../../doctor/DoctorSignup'
import DocDashboard from '../../doctor/DocDashboard'
import DoctorProtectedRoute from './DoctorProtectedRoute'
import DocProfile from '../../doctor/DocProfile'
import DocBlog from '../../doctor/DocBlog'
import DocViewPost from '../../doctor/DocViewBlog'
import SlotScheduling from '../../doctor/SlotScheduling'
import Blog from '../../doctor/Blog'
import DocAbout from '../../doctor/DocAbout'


const DoctorRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/doctorlogin' element={<DoctorLogin/>}/>
       <Route path='/docotp-verification' element={<DocOtpVerification/>}/>
       <Route path='/doctorsignup' element={<DoctorSignup/>}/>
       <Route path='/docabout' element={<DocAbout/>}/>
       <Route path='/docDashboard' element={<DoctorProtectedRoute element={DocDashboard}/>}></Route>
       <Route path='/docprofile'  element={<DoctorProtectedRoute element={DocProfile}/>}></Route>
       <Route path='/slotschedule' element={<DoctorProtectedRoute element={SlotScheduling}/>} ></Route>
       <Route path='/docblog' element={<DoctorProtectedRoute element={DocBlog}/>} ></Route>
       <Route path='/docblogview' element={<DoctorProtectedRoute element={DocViewPost}/>} ></Route>
       <Route path='/blogg' element={<DoctorProtectedRoute element={Blog}/>} ></Route>
      </Routes>
      
     
    </div>
  )
}

export default DoctorRoutes
