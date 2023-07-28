import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization= `Bearer ${token}`;
  },
   unset() {
     axios.defaults.headers.common.Authorization = '';
  }
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/users/signup',
        credentials
      );
      token.set(data.token);
      return data;
    } catch (err) {
      toast.error(err);
      return rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/users/login',
        credentials
      );
      token.set(data.token);
      return data;
    } catch (err) {      
      toast.error(err.message );
      return rejectWithValue(err.message);
    }
  }
); 

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post(
        '/users/logout',
        credentials
      );
      token.unset();
      // return data;
    } catch (err) {
     
      return rejectWithValue(err.message);
    }
  }
); 

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(persistedToken);
      const res = await axios.get('/users/current', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
