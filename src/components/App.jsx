// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as operation from 'redux/operation';
// import { getContacts } from 'redux/selectors.js';
// // import { Loading } from 'notiflix';
// import { ContactForm } from './ContactForm/ContactForm.jsx';
// import { Filter } from './Filter/Filter.jsx';
// import { ContactList } from './ContactList/ContactList.jsx';
// import { Toaster } from 'react-hot-toast';
// import { Radio } from 'react-loader-spinner';
// import { RegisterUserForm } from './RegisterUserForm/RegisterUserForm.jsx';
// import { LogIn } from './LogIn/LogIn.jsx';
// // import { Navbar } from './Navigation/Navbar.jsx';
// import { AppBar } from './Navigation/AppBar.jsx';
// import getIsLoggedIn from '../redux/auth/auth-selectors.js'

// export const App = () => {
//   const { items, isLoading, error } = useSelector(getContacts);

//   //переніс сюди діспатч виклик контактів, бо не рендерилась із-за умови items.length(39 рядок)
//   // const dispatch = useDispatch();
//   // useEffect(() => {
  
//   //     dispatch(operation.fetchContacts())
   
//   // }, [dispatch,]);

//   //нотифікашка на лоадінг
//   // Loading.init({
//   //   svgColor: 'fuchsia',
//   //    });
//   //   if (isLoading) {
//   //     return (

//   //     );
//   // }
//   //  else {
//   //     toast.remove();;
//   //   }

//   return (
//     <>
//       <AppBar />
//       <div
//         style={{
//           display: 'block ',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         {error ? (
//           <h3>{error}</h3>
//         ) : (
//           <div>
//             <ContactForm />
//             {isLoading && !error && (
//               <Radio
//                 visible={true}
//                 height="280"
//                 width="280"
//                 ariaLabel="radio-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="radio-wrapper"
//               />
//             )}
//               {
//                 // items.length > 0 &&
//                 getIsLoggedIn ? (
//               <>
//                 <h2>Contacts</h2>
//                 <Filter />

//                 <ContactList />
//               </>
//             ) : (
//               <h3>Your phonebook is empty</h3>
//             )}
//           </div>
//         )}
//         <div>
//           <Toaster />
//         </div>
//         <RegisterUserForm />
//         <LogIn />
//       </div>
//     </>
//   );
// };


import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth-operation';

import { useAuth } from '../redux/auth/useAuth.js';

const HomePage = lazy(() => import('../Pages/Home'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/LogIn'));
const ContactsPage = lazy(() => import('../Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
