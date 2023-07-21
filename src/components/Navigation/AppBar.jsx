import { useSelector } from 'react-redux';
import  authSelectors  from '../../redux/auth/auth-selectors.js';
import { Navbar } from './Navbar';
import { UserMenu } from 'components/UserMenu/UserMenu.jsx';
import {NavbarContainer } from './Navbar.styled.js';
import { Authbar } from './Authbar';


export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
      <NavbarContainer>
        <Navbar />
        {isLoggedIn ? <UserMenu /> : <Authbar />}
      </NavbarContainer>
    ); 
}


     
     