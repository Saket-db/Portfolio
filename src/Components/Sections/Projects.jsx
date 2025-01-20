// import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import {projects} from "../../data/constants"
import ProjectCard from '../Cards/ProjectCard';


const Container = styled.div` 
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
  position: relative;
  mwrgin-top: 40px;
  flex-direction: row;
  // flex-wrap:nowrap;
  padding: 0 16px;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column; 
    gap: 20px; 
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1100px;
  gap: 20px; 
  align-items: center;

  @media (max-width: 960px) {
    padding: 0 20px;+
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 760px) {
    margin-top: 20px; 
    font-size: 28px; 
    font-weight: 500;
    line-height: 1.4; 
  }
`;

const Desc = styled.div`
  font-size: 16px;
  padding: 0px 20px; 
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_secondary + 95};

  @media (max-width: 760px) {
    font-size: 14px; 
    line-height: 1.5; 
    padding: 0 15px; 
  }
`;


const TtoggleButtonGroup = styled.div`
display: flex;
border: 1.5px solid ${({theme}) => theme.primary};
color: ${({theme}) => theme.primary};
border-radius: 14px;
font-size: 16px;
margin: 10px 0;
font-weight: 500;

@media (max-width: 760px) {
font-size: 12px;
}
`;

const ToggleButton = styled.div`
padding: 6px 12px;
border-radius: 4px;
cursor: pointer;
&:hover{
background: ${({ theme }) => theme.primmary + 20};
}

@media (max-width: 768px)
{
padding: 6px 8px;
border-radius: 4px;
}

${({ active, theme}) =>
active &&
`
background: ${theme.primary + 20};
`}
`;

const Divider = styled.div`
width: 1.5px;
background: ${({theme}) => theme.primary};
`;

const CardContainer = styled.div`
display: flex;
align-items:center;
justify-content: center;
gap: 22px;
// flex-wrap: nowrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id = "Project">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on a wide range of projects and mastered multiple tech stacks, including the MERN stack, Vanilla JS, and more. Here are a few of my projects:</Desc>
        <TtoggleButtonGroup>
          <ToggleButton active={toggle==="all"}
          onClick={() => setToggle("all")}>All</ToggleButton>
          <Divider />
<ToggleButton active={toggle==="web app"}
          onClick={() => setToggle("web app")}>WEB APP's</ToggleButton>
        </TtoggleButtonGroup>
        <CardContainer>
          {toggle === "all" && projects.map((project) => <ProjectCard project ={project} />)}
          {projects
          .filter((item) => item.category === toggle).map((project) => <ProjectCard project ={project} />)}
        </CardContainer>

      </Wrapper>
    </Container>
  )
}

export default Projects
