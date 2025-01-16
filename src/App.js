import styled, { ThemeProvider} from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Sections/Hero";
import { BrowserRouter } from "react-router-dom";
import Skills from "./Components/Sections/Skills";
import Experience from "./Components/Sections/Experience";

const Body = styled.div`
background-color: ${({theme}) => theme.bg};
color: ${({theme}) => theme.text_primary};
width: 100%;
position: relative;
overflow-x: hidden;
height: 100vh;
`;


function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <BrowserRouter>
      <Navbar />
      <Body>
        <Hero />
        <Skills />
        <Experience />
      </Body>
      </BrowserRouter>
    </ThemeProvider>
      
    
  );
}

export default App;
