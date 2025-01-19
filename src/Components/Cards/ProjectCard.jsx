// import { Description } from '@mui/icons-material';
// import { Card } from '@mui/material'
import styled from 'styled-components';
import React from 'react'

const Card = styled.div``;
const Image = styled.img``;
const Tags = styled.div``;
const Title = styled.div``;
const Date = styled.div``;
const Details = styled.div``;
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
