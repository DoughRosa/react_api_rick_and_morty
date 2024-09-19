import React from 'react';

import FooterStyled from '../../components/FooterStyled';
import Navbar from '../../components/NavBar';
import navigation from '../navigation';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar navigation={navigation} />
      {children}
      <FooterStyled />
    </React.Fragment>
  );
};

export default DefaultLayout;
