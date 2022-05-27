import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import { Header, About, Projects, Skill } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BackgroundLine className='line' color='#ECE5C7'></BackgroundLine>
      <About />
      <Skill />
      <Projects />
    </>
  );
}

export default App;

const BackgroundLine = styled.div`
  width: 100vw;
  height: 256px;
  background-color: ${props => (props.color ? props.color : '#ccc')};
  position: absolute;
  left: -17px;
  top: 230px;
  z-index: -100;
`;
