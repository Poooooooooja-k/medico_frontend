import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const PatientProtectedRoute = ({element:Element}) => {
  const user=useSelector((state)=>state.auth.isLogin)
    if (!user){
        return <Navigate to='/patient/patientlogin'/>
    }
    return <Element/>
}
export default PatientProtectedRoute
