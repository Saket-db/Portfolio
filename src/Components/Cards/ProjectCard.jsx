// import { Description } from '@mui/icons-material';
// import { Card } from '@mui/material'
import styled from 'styled-components';
import React from 'react'

// const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr); /* Two cards per row */
//   gap: 20px; /* Space between cards */
//   justify-content: center; /* Center the grid within the parent */
//   width: 100%;
//   padding: 20px;

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr; /* Single card per row on smaller screens */
//   }
// `;

const Card = styled.div`
  width: 100%; /* Let the card take full width within the grid column */
  max-width: 330px; /* Constrain card size */
  height: 440px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.card + 'CC'};
  border-radius: 8px;
  box-shadow: rgba(23, 93, 230, 0.35) 0px 8px 24px;
  display: flex;
  position: releative;
  flex-direction: column;
  border: 3px solid;
  overflow: hidden;
  padding: 8px 12px;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translate(-10px);
    box-shadow: rgba(23, 93, 230, 0.35) 0px 18px 14px;
    filter: brightness(1.1);
  }

  @media screen and (max-width: 768px) {
    max-width: 100%; /* Adjust to fit the container on small screens */
    height: 400px;
    padding: 8px;
    font-size: 12px;
  }
`;




const Image = styled.img`
width: 100%;
height: 180px;
background-color: ${({ theme }) => theme.white};
border-radius: 8px;
box-shadow: box-shadow: rgba(23, 93, 230, 0.35) 0px 14px 4px;
// overflow:hidden;
// padding: 20px 15px;
// display: flex;
// flex-direction: column;

`;



const Tags = styled.div`
width: 100%;
diplay: flex;
align-items: center;
flex-wrap: wrap;
gap: 5px;
margin-top: 4px;
`;


const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${({theme}) => theme.tex_secondary};
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;


`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;


const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0px;
padding: 0px 4px;
`;


const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;


const ProjectCard = ({project}) => {
  return (
    // <CardContainer>
    <Card>
    <Image src={project.image }/>
    <Tags></Tags>
    <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
    </Details>
    <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
      <Button href={project.github} target="_blank">
        View Code
      </Button>
    </Card>
    // {/* </CardContainer> */}
  )
  
}

export default ProjectCard
