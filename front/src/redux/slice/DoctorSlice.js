import {createSlice} from '@reduxjs/toolkit'

const initialState={
    docisLogin:false
}

if (localStorage.getItem('token')){
    initialState.docisLogin=true
}

const DoctorSlice=createSlice({
    name:'doctor_auth',
    initialState,
    reducers:{
        doctorLogin:(state)=>{
            state.docisLogin=true
            console.log('login success!!')
        },
        doctorLogout:(state)=>{
            state.docisLogin=false
            localStorage.removeItem('role')
            localStorage.removeItem('token')
            localStorage.removeItem('refreshtoken');
            console.log("logged out successfully")
        }
    }
    
})
export const {doctorLogin,doctorLogout}=DoctorSlice.actions

export default DoctorSlice.reducer