import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#06B49A',
    secondary: '#AFDBD2'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

interface DefautThemePros {
  children: React.ReactNode;
}

const DefaultTheme: React.FC<DefautThemePros> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DefaultTheme;
