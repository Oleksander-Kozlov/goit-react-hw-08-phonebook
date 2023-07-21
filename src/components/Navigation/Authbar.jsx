import { NavItem, NavLink, NavList } from './Navbar.styled.js';

export const Authbar = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink href="/register">Register</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login">Log In</NavLink>
      </NavItem>
    </NavList>
  );
};
