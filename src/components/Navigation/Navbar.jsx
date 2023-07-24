
import { NavItem, NavLink, NavList, NavbarContainer } from './Navbar.styled.js';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <NavLink href="/">
          Phonebook
        </NavLink>
      </div>
      <NavList>
        <NavItem>
          <NavLink href="/contacts">Contacts</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};
