import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: [],
  error: '',
};

// Create an async thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: 'Users',
  initialState,
  extraReducers: (builder) => {
    // Handle the pending state when fetching users
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    // Handle the fulfilled state when fetching users
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });

    // Handle the rejected state when fetching users
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;