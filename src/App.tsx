import { useRef, useEffect, useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import {
  Header,
  About,
  Projects,
  Skill,
  Footer,
  Intro,
  Email,
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
        <Wrap className='wrapper'>
          <Header
            scrollRef={scrollRef}
            toggleMode={toggleMode}
            isDarkmode={isDarkMode}
          />
          <Main>
            {/* <Intro ref={scrollRef} /> */}
            <About ref={scrollRef} />
            <Skill ref={scrollRef} />
            <Projects ref={scrollRef} />
          </Main>
          <Footer />
        </Wrap>
      </ThemeProvider>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 1130px;
  margin: auto;
  position: relative;
  padding-bottom: 160px;

  @media (max-width: 1130px) {
    width: 100%;
  }
`;

const Wrap = styled.div`
  min-height: 100vh;
  position: relative;
  @media (max-width: 1130px) {
    width: 100%;
  }
`;
