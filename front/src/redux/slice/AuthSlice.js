import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isLogin:false
}

if (localStorage.getItem('token')){
    initialState.isLogin=true
}

const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        userLogin:(state)=>{
            state.isLogin=true
            console.log('login success!!')
        },
        userLogout:(state)=>{
            state.isLogin=false
            localStorage.removeItem('token')
            localStorage.removeItem('refreshtoken');
            console.log("logged out successfully")
        }
    }
    
})
export const {userLogin,userLogout}=AuthSlice.actions

export default AuthSlice.reducer