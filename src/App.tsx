import React, { useRef } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import {
  Header,
  About,
  Projects,
  Skill,
  Footer,
  Intro,
} from './components/index';

function App() {
  const scrollRef = useRef<HTMLElement[] | null>([]);

  return (
    <>
      <GlobalStyle />
      <Header scrollRef={scrollRef} />
      <Main>
        <Intro />
        <About ref={scrollRef} />
        <Skill ref={scrollRef} />
        <Projects ref={scrollRef} />
      </Main>
      <Footer />
    </>
  );
}

export default App;

const Main = styled.main`
  width: 1290px;
  // min-height: 100%;
  margin: auto;
  padding-top: 100px;
`;
