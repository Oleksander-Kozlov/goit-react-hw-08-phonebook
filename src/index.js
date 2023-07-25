import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
// import { Radio } from 'react-loader-spinner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App
            // basename="/goit-react-hw-08-phonebook"
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
