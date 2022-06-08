import React, { useRef, useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import {
  Header,
  About,
  Projects,
  Skill,
  Footer,
  Intro,
} from "./components/index";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const scrollRef = useRef<HTMLElement[] | null>([]);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header scrollRef={scrollRef} />
      <Main>
        <Intro />
        <div data-aos="fade-right" data-aos-offset="300">
          <About ref={scrollRef} />
        </div>
        <div data-aos="fade-left" data-aos-offset="400">
          <Skill ref={scrollRef} />
        </div>
        <div data-aos="fade-right" data-aos-offset="500">
          <Projects ref={scrollRef} />
        </div>
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
