import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const DoctorProtectedRoute = ({element:Element}) => {
  const user=useSelector((state)=>state.doctor_auth.docisLogin)
    if (!user){
        return <Navigate to='/doctor/doctorlogin'/>
    }
    return <Element/>
}

export default DoctorProtectedRoute
