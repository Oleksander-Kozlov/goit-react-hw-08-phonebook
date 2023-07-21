
import { NavItem, NavLink, NavList, NavbarContainer } from './Navbar.styled.js';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <h1>Phonebook</h1>
      </div>
      <NavList>
        <NavItem>
          <NavLink href="/contacts">Contacts</NavLink>
        </NavItem>
        
      </NavList>

     
    </NavbarContainer>
  );
};
