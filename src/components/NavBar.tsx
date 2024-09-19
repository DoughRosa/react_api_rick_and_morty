import React from 'react';
import { NavigationType } from '../config/navigation';
import NavBarStyled from './NavBarStyled';
import { Link } from 'react-router-dom';

interface NavbarProps {
  navigation: NavigationType[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  return (
    <NavBarStyled>
      {navigation.map(item => (
        <Link to={item.url}>{item.label}</Link>
      ))}
    </NavBarStyled>
  );
};

export default Navbar;
