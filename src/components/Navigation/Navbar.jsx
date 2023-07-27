
import {
  NavItem,
  NavLinkStyled,
  NavList,
  NavbarContainer,
} from './Navbar.styled.js';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <NavLinkStyled to="/">
          Phonebook
        </NavLinkStyled>
      </div>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};
