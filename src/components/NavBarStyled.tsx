import styled from 'styled-components';

const NavBarStyled = styled.nav`
  height: 80px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;

  > a {
    margin-right: 1rem;
  }
`;
export default NavBarStyled;
