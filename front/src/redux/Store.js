import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/AuthSlice'



const appStore=configureStore({
    reducer:{
        auth:authReducer,
    }
})

export default appStore