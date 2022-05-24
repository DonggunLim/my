import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Header, About } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
    </>
  );
}

export default App;
