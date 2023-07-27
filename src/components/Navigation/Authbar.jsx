import { NavItem, NavLinkStyled, NavList } from './Navbar.styled.js';

export const Authbar = () => {
  return (
    <NavList>
      <NavItem>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/login">Log In</NavLinkStyled>
      </NavItem>
    </NavList>
  );
};
