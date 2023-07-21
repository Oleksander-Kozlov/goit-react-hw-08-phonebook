import { register, logIn, logOut, refreshUser } from './auth-operation.js';
const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilledRegister = (state, action) => {
  state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  state.isLoading = false;
};
const handleFulfilledLogIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const handleFulfilledlogOut = (state, action) => {
  state.user = {
    name: null, email: null,
  };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;

}


const handleFulfilledrefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoggedIn = false;
};

const handlePendingRefreshUser = (state, action) => {state.isRefreshing = true;};
const handleRejectedRefreshUser = (state, action) => {state.isRefreshing = false;};
const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logIn.rejected, handleRejected)
      // .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleFulfilledlogOut)
      // .addCase(logOut.rejected, handleRejected),
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleFulfilledrefreshUser)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser),
});

export  const authSliseReducer = authSlise.reducer;