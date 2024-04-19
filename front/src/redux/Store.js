import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/AuthSlice'
import AdminSlice from "./slice/AdminSlice";
import DoctorSlice from "./slice/DoctorSlice";


const appStore=configureStore({
    reducer:{
        auth:authReducer,
        admin_auth:AdminSlice,
        doctor_auth:DoctorSlice,
    }
})

export default appStore