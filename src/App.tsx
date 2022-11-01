import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import { Header, About, Projects } from './components/index';

const filters = ['About', 'Project', 'Contact'];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <GlobalStyle />
      <Wrap className='wrapper'>
        <Header filters={filters} filter={filter} setFilter={setFilter} />
        <Main>
          {filter === 'About' && <About />}
          {filter === 'Project' && <Projects />}
          {filter === 'Contact' && <About />}
        </Main>
      </Wrap>
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
