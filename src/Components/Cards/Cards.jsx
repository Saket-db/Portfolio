// import { Description } from '@mui/icons-material';
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from "styled-components";
// import Skills from '../Sections/Skills';


const Image = styled.img`
border-radius: 12px;
height: 70px;
max-width: 100%;
margin-top:6px;

@media only screen and (max-width: 768px) {
height: 50px;
border-radius: 10px;
}
`;

const Top= styled.div`
width: 100%;
display: flex;
max-width: 100%;
gap: 8px;
border-radius: 12px;
`;

const Body = styled.div`
idth: 100%;
display: flex;
flex-direction: column;

`;

const Skill = styled.div`
font-size: 15px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary + 97};
@media only screen and (max-width: 768px) {
font-size: 13px;
`;

const IW = styled.div`
display: flex;
flex-wrap: wrap;
gap: 6px;
`;

const Role = styled.div`
font-size: 15px;
font-weight: 600;
margin-bottom: 3px;
color: ${({ theme }) => theme.text_primary + 97};
@media only screen and (max-width: 768px) {
font-size: 13px;
}
`;

const DDescription = styled.div`
width: 100%;
font-size: 14px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 99};
margin-bottom: 7px;
@media only screen and (max-width: 768px) {
font-size: 12px;
}
`;


const Span = styled.div`
display: -webkit-box;
max-width: 100%;
`;


const SSkills = styled.div`
width: 100%;
display: flex;
gap: 12px;
margin-top: 4px;
`;

const Date = styled.div`
font-size: 13px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 85};
@media only screen and (max-width: 768px) {
font-size: 11px;`;

const Company = styled.div`
font-size: 14px;
font-weight: 500;
margin-bottom: 3px;
color: ${({ theme }) => theme.text_secondary + 97};
@media only screen and (max-width: 768px) {
font-size: 12px;
`;


const Cards = ({experience}) => {
  return (
    <VerticalTimelineElement
    icon={<img 
    width= "100%" height="100%" alt = {experience.company} style={{borderRadius: "50%", objectFit: "Cover", border: "2px solid"}} src={experience.img} />}
    
    contentStyle={{display : "flex", flexDirection:"column", gap:"12px", background:"#1d1836", color:"#fff",borderRadius: "4px", border: "1px solid rgba(255,255,255,0.125)"}}
    
    contentArrowStyle = {{borderRight: "7px solid rgba(255, 255, 255, 0.3)", }}
    date={experience.date}
    >
        <Top>
            <Image src ={experience.img} />
            <Body>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Date>{experience.date}</Date>
            </Body>
            </Top>
            <DDescription>
                <Span>{experience.desc}</Span>
                <SSkills><b>Skills</b>
                <IW>
                {experience.skills.map((skill,index) =>(
                    <Skill>• {skill}</Skill>
                ))}
                </IW>
                </SSkills>
            </DDescription>
        
      
    </VerticalTimelineElement>
  )
}

export default Cards
