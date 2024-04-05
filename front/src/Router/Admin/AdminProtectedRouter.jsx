import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtectedRouter = ({element:Element}) => {
    const user=useSelector((state)=>state.admin_auth.AdminIsLogin)
    console.log(user,"---user-------")
    if (!user){
        return <Navigate to='/adminlogin'/>
    }
    return <Element/>
  
}

export default AdminProtectedRouter
