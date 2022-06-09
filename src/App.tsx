import React, { useRef, useEffect, useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import {
  Header,
  About,
  Projects,
  Skill,
  Footer,
  Intro,
} from './components/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const scrollRef = useRef<HTMLElement[] | null>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prev => {
      isDarkMode
        ? localStorage.setItem('Theme', 'Light')
        : localStorage.setItem('Theme', 'Dark');
      return !prev;
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const mode = localStorage.getItem('Theme');
    mode === 'Light' ? setIsDarkMode(false) : setIsDarkMode(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header
          scrollRef={scrollRef}
          toggleMode={toggleMode}
          isDarkmode={isDarkMode}
        />
        <Main>
          <Intro ref={scrollRef} />
          <div data-aos='fade-right' data-aos-offset='300'>
            <About ref={scrollRef} />
          </div>
          <div data-aos='fade-left' data-aos-offset='400'>
            <Skill ref={scrollRef} />
          </div>
          <div data-aos='fade-right' data-aos-offset='500'>
            <Projects ref={scrollRef} />
          </div>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 1290px;
  margin: auto;
  padding-top: 100px;
`;
