import React from 'react';

import DefaultTheme from './config/theme/DefaultTheme';
import GlobalStyle from './config/GlobalStyle';

import RoutesApp from './routes/RoutesApp';

function App() {
  return (
    <DefaultTheme>
      <RoutesApp />
      <GlobalStyle />
    </DefaultTheme>
  );
}

export default App;
