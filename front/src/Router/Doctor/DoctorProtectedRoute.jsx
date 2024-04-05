import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const DoctorProtectedRoute = ({element:Element}) => {
  const user=useSelector((state)=>state.auth.isLogin)
    console.log(user,"---user-------")
    if (!user){
        return <Navigate to='/doctorlogin'/>
    }
    return <Element/>
}

export default DoctorProtectedRoute
