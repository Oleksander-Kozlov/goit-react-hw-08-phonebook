// import { Helmet } from 'react-helmet';
import { Helmet } from 'react-helmet';
import { RegisterUserForm } from '../components/RegisterUserForm/RegisterUserForm.jsx';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterUserForm />
    </div>
  );
}
