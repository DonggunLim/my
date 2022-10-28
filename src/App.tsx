import { useEffect, useState } from 'react';
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

import 'aos/dist/aos.css';
import { darkTheme, lightTheme } from './styles/theme';

const filters = ['About', 'Project', 'Contact'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('Theme');
    mode === 'Light' ? setIsDarkMode(false) : setIsDarkMode(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Wrap className='wrapper'>
          <Header filters={filters} filter={filter} setFilter={setFilter} />
          <Main>
            {filter === 'About' && <About />}
            {filter === 'Project' && <Projects />}
            {filter === 'Contact' && <About />}
          </Main>
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
