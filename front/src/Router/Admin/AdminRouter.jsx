import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminDashboard from '../../admin/AdminDashboard'
import AdminProtectedRouter from './AdminProtectedRouter'
import Patients from '../../admin/Patients';
import Doctors from '../../admin/Doctors';
import Specialization from '../../admin/Specialization';
import  AdminViewBlog from '../../admin/AdminViewBlog'
import Blogpost from '../../admin/Blogpost';
import AdminLoginpage from '../../admin/AdminLoginpage';
import Appointments from '../../admin/Appointments';
import DoctorBlog from '../../admin/DoctorBlog';



const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/admindashboard' element={<AdminProtectedRouter element={AdminDashboard}/>}></Route>
        <Route path='/adminpatients' element={<AdminProtectedRouter element={Patients}/>}></Route>
        <Route path='/admindoctors' element={<AdminProtectedRouter element={Doctors}/>}></Route>
        <Route path='/adminspecializations' element={<AdminProtectedRouter element={Specialization}/>}></Route>
        <Route path='/adminviewblog' element={<AdminProtectedRouter element={AdminViewBlog}/>}></Route>
        <Route path='/addblogpost' element={<AdminProtectedRouter element={Blogpost}/>}></Route>
        <Route path='/adminappointments' element={<AdminProtectedRouter element={Appointments}/>}></Route>
        <Route path='/admindoctorblog' element={<AdminProtectedRouter element={DoctorBlog}/>}></Route>
        <Route path='/adminlogin' element={<AdminLoginpage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
