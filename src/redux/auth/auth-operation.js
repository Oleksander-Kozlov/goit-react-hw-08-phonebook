import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        credentials
      );
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
      const { data } = await axios.post('/users/login', credentials);
      return data;
    } catch (err) {      
      toast.error(err);
      return rejectWithValue(err.message);
    }
  }
); 