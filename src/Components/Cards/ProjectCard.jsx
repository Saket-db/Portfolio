// import { Description } from '@mui/icons-material';
// import { Card } from '@mui/material'
import styled from 'styled-components';
import React from 'react'

const Card = styled.div`
width: 330px;
height: 490px;
cursor: pointer;
background-color: ${({ theme }) => theme.card + 'CC'};
border-radius: 8px;
box-shadow: box-shadow: rgba(23, 93, 230, 0.35) 0px 8px 24px;
display: flex;
flex-direction: column;
overflow:hidden;
gap: 10px;
transition: all 0.5s ease-in-out;

&:hover{
transform: translate(-10px);
box-shadow: box-shadow: rgba(23, 93, 230, 0.35) 0px 18px 14px;
filter: brightness(1.1);
}

`
;

const Image = styled.img`
width: 100%;
height: 110px;
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

`;
const Date = styled.div``;


const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0px;
padding: 0px 4px;
`;



const Description = styled.div``;
const Members = styled.div``;
const Avatar = styled.img``;
const Button = styled.a``;



const ProjectCard = ({project}) => {
  return (
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
  )
  
}

export default ProjectCard
