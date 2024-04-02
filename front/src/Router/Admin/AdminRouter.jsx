import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminDashboard from '../../admin/AdminDashboard'
import AdminProtectedRouter from './AdminProtectedRouter'

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/admindashboard' element={<AdminProtectedRouter element={AdminDashboard}/>}></Route>
        
      </Routes>
    </div>
  )
}

export default AdminRouter
