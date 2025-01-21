import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Bio } from '../data/constants.js';
import { MenuRounded } from '@mui/icons-material';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 65px;
  align-items: center;
  justify-content: center;
  top: 0;
  position: sticky;
  display: flex;
  font-size: 1rem;
  z-index: 20;
  color: white;
`;

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 65px;
  padding: 0 10px;
  width: 100%;
  // gap: 10px;
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
  gap: 32px;
  margin-right: 15px;
  font-weight: 700;
   color: ${({ theme }) => theme.text_primary};
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
  gap: 45px;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink2 = styled.a`
  color: ${({ theme }) => theme.text_primary}; /* Bind to theme's text color */
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  padding: 12px 16px;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.card_light};
    border-radius: 5px;
  }
`;

const ButtonContainer = styled.div`
  width: full;
  height: 100%;
  gap: 21px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 4px 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ToggleTheme = styled.button`
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
  background-color: transparent;
  // margin-left: 14px;
  transition: all 0.4s ease-in-out;
  width: content  ;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 13px;
  padding: 4px 10px;
  width: content;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const MobileMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-direction: column;
  align-items: start;
  gap: 24px; 
  padding: 16px 24px; 
  cursor: pointer;
  width: 100%;
  // background: ${({ theme }) => theme.bg === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)" }; 
   background-color: ${({ theme }) => theme.card + 'CC'};
  top: 64px;
  position: absolute;
  right: 0;
  transition: all 0.5s ease-in-out;
  transform: ${({ IsOpen }) => (IsOpen ? 'translateX(0)' : 'translateX(100%)')};
  border-radius: 10px 0 0 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2); 
  z-index: 10; 
  color: white;
  
  @media screen and (max-width: 768px) {
    top: 70px;
    width: 250px;
    border-radius: 10px;
    color: white;
  }
`;

const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: none;
  color: ${({ theme }) => theme.text_primary};
  margin-left: 16px;  
  cursor: pointer;  
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 30px; 
    margin-right: 10px; 
  }
`;

const Navbar = ({ toggleTheme }) => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Saket DB</NavLogo>
        <MobileIcon onClick={() => setIsOpen(!IsOpen)}>
          <MenuRounded style={{ color: 'inherit' }} />
        </MobileIcon>

        <NavItems>
          <NavLink2 href="#About">About</NavLink2>
          <NavLink2 href="#Skills">Skills</NavLink2>
          <NavLink2 href="#Education">Experience</NavLink2>
          <NavLink2 href="#Project">Projects</NavLink2>
          <NavLink2 href="#Educ">Education</NavLink2>
        </NavItems>

        {IsOpen && (
          <MobileMenu IsOpen={IsOpen}>
            <NavLink2 href="#About">About</NavLink2>
            <NavLink2 href="#Skills">Skills</NavLink2>
            <NavLink2 href="Education">Experience</NavLink2>
            <NavLink2 href="#Project">Projects</NavLink2>
            <NavLink2 href="#Educ">Education</NavLink2>
            <GithubButton href={Bio.github} target="_blank">
              Github Profile
            </GithubButton>
            <ToggleTheme onClick={toggleTheme}>Switch Theme</ToggleTheme>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
          <ToggleTheme onClick={toggleTheme}>Switch Theme</ToggleTheme>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
