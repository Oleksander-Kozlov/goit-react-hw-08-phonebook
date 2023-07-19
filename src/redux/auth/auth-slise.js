import { register } from './auth-operation.js';
const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
}
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoggedIn = false;
};
const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected),
});

export  const authSliseReducer = authSlise.reducer;