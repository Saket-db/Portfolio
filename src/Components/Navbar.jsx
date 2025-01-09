import React from 'react';
import styled from 'styled-components';
import {Link as LinkR, NavLink} from "react-router-dom";

const NavbarContainer = styled.div`
background-color: ${({theme}) => theme.bg};
height: 75px;
align-items: center;
justify-content: center;
top: 0;
position: sticky;
font-size:1 rem;
z-index: 20;
color: white;
`;
const NavLogo = styled(LinkR)`
padding: 0 6px;
text-decoration: none;
color: inherit;`
;

const NavItems = styled.ul`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
list-type:none;
gap: 27px;
padding: 0 6px;
text-decoration: none;
`
;

const NavLink = styled.a`
color ${({theme}) => theme.text_primary};
font-weight:500;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

`

const Navbar = () => {
  return <NavbarContainer>
    <NavLogo to = "/" >Saket Dwaraka Bhamidipaati
    <NavItems>
        <NavLink href = "">About</NavLink>
        <NavLink href = "">Skills</NavLink>
        <NavLink href = "">Experience</NavLink>
        <NavLink href = "">Projects</NavLink>
        <NavLink href = "">Education</NavLink>
    </NavItems>

    </NavLogo></NavbarContainer>;
}

export default Navbar;
