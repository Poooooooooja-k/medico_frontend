import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/AuthSlice'
import AdminSlice from "./slice/AdminSlice";



const appStore=configureStore({
    reducer:{
        auth:authReducer,
    admin_auth:AdminSlice,
    }
})

export default appStore