import { register, logIn, logOut, refreshUser } from './auth-operation.js';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
 
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
 
};
const handleFulfilledLogIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
 
};
const handleFulfilledlogOut = (state, action) => {
  state.user = {
    name: null, email: null,
  };
  state.token = null;
  state.isLoggedIn = false;
 
  

}


const handleFulfilledrefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

const handleRejected = (state) => {
  
  state.isLoggedIn = false;
};

const handlePendingRefreshUser = (state) => {state.isRefreshing = true;};
const handleRejectedRefreshUser = (state) => {state.isRefreshing = false;};
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
      .addCase(logOut.fulfilled, handleFulfilledlogOut)      
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleFulfilledrefreshUser)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser),
});

const AuthPersistConfig = {
  key: 'authSlise',
  storage,
  whitelist: ['token'],
};

export const authSliseReducer = persistReducer(AuthPersistConfig, authSlise.reducer);

// export  const authSliseReducer = authSlise.reducer;