import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    setUser: (state, action) => {
        state.user = action.payload
    },
    removeUser: (state, action) => {
        state.user = null
    }
}
});

export const {
    setUser, removeUser
} = authSlice.actions

export const selectUser = state => state.auth.user
export default authSlice.reducer