import React, { useRef } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import { Header, About, Projects, Skill, Footer } from './components/index';

function App() {
  const scrollRef = useRef<HTMLElement[] | null>([]);

  return (
    <>
      <GlobalStyle />
      <Header scrollRef={scrollRef} />
      <Main>
        <BackgroundLine className='line' color='#ECE5C7'></BackgroundLine>
        <About ref={scrollRef} />
        <Skill ref={scrollRef} />
        <Projects ref={scrollRef} />
      </Main>
      <Footer />
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

const Main = styled.main`
  width: 1290px;
  min-height: 100%;
  margin: auto;
`;
