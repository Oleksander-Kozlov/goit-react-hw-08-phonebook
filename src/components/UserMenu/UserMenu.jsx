import { NavP, NavbarContainer } from "components/Navigation/Navbar.styled.js";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from '../../redux/auth/auth-selectors.js';
// import { logOut } from '../../redux/auth/auth-operation.js';
import * as authOperation from 'redux/auth/auth-operation';

// import { UserBox } from "./UserMenu.styled.js";

export const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(authSelectors.getUserName);
    // useEffect()
    
  return (
    <NavbarContainer>
      <NavP>🟢 Hello, {name}</NavP>
      <button type="submit" onClick={() => dispatch(authOperation.logOut())}>
        LogOut🚪
      </button>
    </NavbarContainer>
  );
};
