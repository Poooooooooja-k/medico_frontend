import {createSlice} from '@reduxjs/toolkit'

const initialState={
    AdminIsLogin:false
}

if (localStorage.getItem('admintoken')){
    initialState.AdminIsLogin=true
}

const AdminSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        AdminLogin:(state)=>{
            state.AdminIsLogin=true
            console.log('login success!!')
        },
        AdminLogout:(state)=>{
            state.AdminIsLogin=false
            localStorage.removeItem('admintoken');
            console.log("logged out successfully")
        }
    }
    
})
export const {AdminLogin,AdminLogout}=AdminSlice.actions

export default AdminSlice.reducer