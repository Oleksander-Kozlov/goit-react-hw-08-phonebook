
import styled from 'styled-components';

export const NavbarContainer = styled.header`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const NavItem = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 5px;

  &:hover {
    text-decoration: underline;
    color: fuchsia;
  }
`;
export const NavP = styled.p`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;