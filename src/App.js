import styled, { ThemeProvider} from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Sections/Hero";
import { BrowserRouter } from "react-router-dom";

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
      </Body>
      </BrowserRouter>
    </ThemeProvider>
      
    
  );
}

export default App;
