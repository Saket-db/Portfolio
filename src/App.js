import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './Components/Navbar';
import Hero from './Components/Sections/Hero';
import Skills from './Components/Sections/Skills';
import Experience from './Components/Sections/Experience';
import Education from './Components/Sections/Education';
import Projects from './Components/Sections/Projects';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  position: relative;
  overflow-x: hidden;
  height: 100vh;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(72, 61, 139, 0.25) 0%, /* Deep purple (slightly transparent) */
      rgba(138, 43, 226, 0) 50% /* Electric violet (transparent in the middle) */
    ),
    linear-gradient(
      141.27deg,
      rgba(25, 25, 112, 0) 50%, /* Midnight blue (transparent in the middle) */
      rgba(75, 0, 130, 0.3) 100% /* Indigo (soft transparency) */
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
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
          <Wrapper>
          <Skills />
          <Experience toggleTheme={toggleTheme} />
          </Wrapper>
          <Wrapper>
          <Projects />
          </Wrapper>
          <Wrapper>
          <Education />
          </Wrapper>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
