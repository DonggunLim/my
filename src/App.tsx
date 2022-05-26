import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Header, About, Projects } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
