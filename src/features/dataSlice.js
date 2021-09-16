import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchInput: 'tech',
    dataItem: null,
    loading: true
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.dataItem = action.payload
        },
        setInput: (state, action) => {
            state.searchInput = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
});

export const {
    setData,
    setInput,
    setLoading
} = dataSlice.actions
    export const selectData = state => state.data.dataItem
    export const selectInput = state => state.data.searchInput
    export const selectLoading = state => state.data.loading
export default dataSlice.reducer