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
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

function App() {
  const scrollRef = useRef<HTMLElement[] | null>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(prev => {
      isDarkMode
        ? localStorage.setItem('Theme', 'Light')
        : localStorage.setItem('Theme', 'Dark');
      return !prev;
    });
  };

  const handleVisible = () => setEmailVisible(!emailVisible);

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
          handleVisible={handleVisible}
        />
        <Main>
          <RiDoubleQuotesL size={250} className='bg_icon_left' />
          <RiDoubleQuotesR size={250} className='bg_icon_right' />
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
        <Footer handleVisible={handleVisible} />
        <Email emailVisible={emailVisible} handleVisible={handleVisible} />
      </ThemeProvider>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 1290px;
  margin: auto;
  padding: 32px;
  // padding-top: 100px;

  .bg_icon_left {
    position: fixed;
    color: #efefef;
    left: 5%;
    top: 5%;
  }

  .bg_icon_right {
    position: fixed;
    color: #efefef;
    right: 5%;
    bottom: 5%;
  }
`;
