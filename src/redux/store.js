// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filtersReducer } from './filtersSlise';
import { authSliseReducer } from './auth/auth-slise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authSliseReducer,
  },
});