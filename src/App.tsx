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
  Modal,
} from './components/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const scrollRef = useRef<HTMLElement[] | null>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(prev => {
      isDarkMode
        ? localStorage.setItem('Theme', 'Light')
        : localStorage.setItem('Theme', 'Dark');
      return !prev;
    });
  };

  const handleModal = () => setModalVisible(!modalVisible);

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
          handleModal={handleModal}
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
        <Footer handleModal={handleModal} />
        <Modal modalVisible={modalVisible} handleModal={handleModal} />
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
`;
