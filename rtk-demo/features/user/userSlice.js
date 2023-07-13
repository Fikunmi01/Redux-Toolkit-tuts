import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios')

const initialState = {
    loading: false,
    user: [],
    error: '',
}

// Generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data.map((user) => user.id))


})

const userSlice = createSlice({
    name: 'Users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = 'true'
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = 'false',
                state.user = action.payload,
                state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = 'false',
                state.user = [],
                state.error = action.error.message
        })
    }
})

export default userSlice.reducer
module.exports.fetchUsers = fetchUsers