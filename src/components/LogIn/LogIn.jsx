import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  Field,
  Label,
  ButtonAddContacts,
  Form,
  Title
} from './LogIn.styled.js';
import * as authOperation from 'redux/auth/auth-operation';
//початкові значення форміка
const initialValues = { email: '', password: '' };
//схема валідації
const schema = yup.object().shape({
  email: yup.string().required().min(4),
  password: yup.string().required().min(4),
});
export const LogIn = () => {
  //виклик диспечера
  const dispatch = useDispatch();
  //отримання даних з редакс

  //додавання контакту при сабміті
  const handleSabmit = (values, { resetForm }) => {
 
    // виклик диспечера для відправки даних в редакс
 console.log('valuesLOG', values);
// const log = JSON.stringify({
//   name: values.name.trim(),
//   email: values.email.trim(),
// });
// console.log('loglog', log);
    dispatch(
      authOperation.logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );

    resetForm();
  };

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
    >
      <Form>
        <Title>LogIn</Title>

        <Label htmlFor="email">E-mail</Label>
        <Field name="email"  />
        <ErrorMessage name="email" component="div" />

        <Label htmlFor="password">password</Label>
        <Field name="password"  />
        <ErrorMessage name="password" component="div" />

        <ButtonAddContacts type="submit">Enter</ButtonAddContacts>
      </Form>
    </Formik>
  );
};
