// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filtersReducer } from './filtersSlise';
import { authSliseReducer } from './auth/auth-slise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
// import storage from 'redux-persist/lib/storage'

const AuthPersistConfig = {
  key: 'root',
  storage,
  whitelist:['token'],
}

const PersistTokenReduser = persistReducer(AuthPersistConfig, authSliseReducer )
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: PersistTokenReduser,
  },
});

export const persistor = persistStore(store);