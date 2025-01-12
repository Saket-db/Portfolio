import React from 'react';
import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";
import {Bio} from "../data/constants.js";
import {  MenuRounded } from "@mui/icons-material";
import { useState } from 'react';

const Nav = styled.div`
background-color: ${({theme}) => theme.bg};
height: 65px;
align-items: center;
justify-content: center;
top: 0;
position: sticky;
display: flex;
font-size:1 rem;
z-index: 20;
color: white;
`;

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 65px;
  padding: 0 24px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;


const NavLogo = styled(LinkR)`
  padding: 0 6px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: inherit;
  display: flex;
  align-items: center;
  transition: transform 0.7s ease, font-size 0.7s ease;

  &:hover {
    transform: scale(1.1);
    font-size: 1.7rem;
  }
`;


const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 32px;
  padding: 0;
  // margin: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const NavLink2 = styled.a`
color ${({theme}) => theme.text_primary};
font-weight:500;
cursor: pointer;
// display: flex;
transition: all 0.4s ease-in-out;
text-decoration: none;
&:hover {
color: ${({ theme })=> theme.primary}}; 
`
;

const ButtonContainer = styled.div`
width: full;
height: 100%;
display: flex;
justify-content:end;
align-items: center;
// flex-basis:50%;
padding:0 6px;
@media screen and (max-width:768px){
display: none;
}
`
;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 13px;
  padding: 4px 10px;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;


const MobileIcon = styled.div`
display: flex;
align-items:center;
height: 100%;
display: none;
color: ${({theme}) => theme.text_primary};
@media screen and (max-width:768px){
display: block;
margin-top: 40px;
}
`
;

const Navbar = () => {
  const[IsOpen, setisOpen] = useState(false);
  return (
  <Nav>
  <NavbarContainer>
    <NavLogo to = "/" >Saket DB</NavLogo>
    <MobileIcon onClick={() => setisOpen(!IsOpen)}>
      <MenuRounded style={{ color: "inherit"}} />
    </MobileIcon>

    <NavItems>
      
        <NavLink2 href = "">About</NavLink2>
        <NavLink2 href = "">Skills</NavLink2>
        <NavLink2 href = "">Experience</NavLink2>
        <NavLink2 href = "">Projects</NavLink2>
        <NavLink2 href = "">Education</NavLink2>
        
    <ButtonContainer>
      <GithubButton href = {Bio.github} target = "_blank">Github Profile</GithubButton>
    </ButtonContainer>
    </NavItems>
    
    
    </NavbarContainer>
    </Nav>

  )  
}

export default Navbar;
