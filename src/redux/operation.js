import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
// import toast from 'react-hot-toast';
// import * as ContactAPI from './ContactAPI';
// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './contactsSlise.js';

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const contacts = await axios.get(
//       'https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts'
//     );
//     dispatch(fetchContactsSuccess(contacts.data));
//   }
//   catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

// import axios from 'axios';
  const optToast = {
    duration: 2000,
    position: 'top-center',
    // Styling
    style: {
      fontSize: "20px"
    },
    className: '',
    // Custom Icon
    icon: '❌'
  }


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const contacts = await axios.get(
        'https://connections-api.herokuapp.com/contacts'
      );
    
      return contacts.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.message);
    }
  }
  
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async ({id,name}, { rejectWithValue }) => {
    try {
      const contact = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${id}`
      );
      toast(`${name} has deleted`, optToast); 
      return contact.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err);
    }
  }
);
  
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        newContact
      );
            toast.success(`${newContact.name} add to phonebook`,{
        duration: 2000,
        position: 'top-center',
      });
      return contact.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err);
    }
  }
);