// import { useState } from 'react';
// import GlobalStyle from './styles/GlobalStyle';
// import styles from './App.module.css';
// import { Header, About, Projects, Setting } from './components/index';
// //context
// import DarkModeProvider from './context/DarkModeContext';

// const filters = ['About', 'Project', 'Contact'];
// function App() {
//   const [filter, setFilter] = useState(filters[0]);

//   return (
//     <DarkModeProvider>
//       <GlobalStyle />
//       <div className={styles.wrap}>
//         <Header filters={filters} filter={filter} setFilter={setFilter} />
//         <main className={styles.main}>
//           {filter === 'About' && <About />}
//           {filter === 'Project' && <Projects />}
//           {filter === 'Contact' && <About />}
//         </main>
//         <Setting />
//       </div>
//     </DarkModeProvider>
//   );
// }

// export default App;
