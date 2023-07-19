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
const initialValues = { name: '', email: '', password: '' };

export const LogIn = () => {
  //виклик диспечера
  const dispatch = useDispatch();
  //отримання даних з редакс

  //додавання контакту при сабміті
  const handleSabmit = (values, { resetForm }) => {
    console.log('values', values);
    // виклик диспечера для відправки даних в редакс
    const reg = JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      
    });
    console.log('reg', reg);

    dispatch(
      authOperation.register({
        name: values.name.trim(),
        email: values.email.trim(),
        
      })
    );

    resetForm();
  };
  //схема валідації
  const schema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().min(4),
    
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
    >
      <Form>
        <Title>LogIn</Title>

        <Label htmlFor="email">E-mail</Label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <Label htmlFor="name">Name</Label>
        <Field name="name" type="name" />
        <ErrorMessage name="name" component="div" />

        
        <ButtonAddContacts type="submit">sign in</ButtonAddContacts>
      </Form>
    </Formik>
  );
};
