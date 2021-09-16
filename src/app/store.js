import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/authSlice'
import dataSlice from '../features/dataSlice'

const store = configureStore({
    reducer:{
        auth: authSlice,
        data: dataSlice
    }
})


export default store