import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './Components/Navbar';
import Hero from './Components/Sections/Hero';
import Skills from './Components/Sections/Skills';
import Experience from './Components/Sections/Experience';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  position: relative;
  overflow-x: hidden;
  height: 100vh;
`;

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} />
        <Body>
          <Hero />
          <Skills />
          <Experience toggleTheme={toggleTheme} />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
