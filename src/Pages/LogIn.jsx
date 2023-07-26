// import { Helmet } from 'react-helmet';
import { Helmet } from 'react-helmet';
import { LogIn } from '../components/LogIn/LogIn.jsx';


export default function Login() {
  
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LogIn />
    </div>
  );
}
