import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled, { useTheme } from 'styled-components';

// Styled Components
const Image = styled.img`
  border-radius: 12px;
  height: 70px;
  max-width: 100%;
  margin-top: 6px;

  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-top: 0;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 8px;
  border-radius: 12px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 97};

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    padding-left: 10px;
  }
`;

const IW = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const DDescription = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 3px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;

const SSkills = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 85};

  @media only screen and (max-width: 768px) {
    font-size: 11px;
    text-align: center;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.text_secondary + 97};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

const Cards = ({ experience }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.company}
          style={{ borderRadius: "50%", border: "2px solid" }}
          src={experience.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        background: theme.name === "light" ? "#000" : `${theme.card}CC`,
        color: "#fff",
        borderRadius: "4px",
        border: theme.name === "light" ? "1px solid rgba(12, 12, 12, 0.84)" : "1px solid rgba(234, 228, 228, 0.86)",
        boxShadow: isHovered
          ? "0px 10px 30px rgba(236, 236, 236, 0.8)"
          : "0px 4px 8px rgba(15, 15, 15, 0.72)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.5s ease-in-out",
      }}
      contentArrowStyle={{
        borderRight: theme.name === "light" ? "7px solid #000" : "7px solid rgba(88, 88, 88, 0.46)",
      }}
      date={experience.date}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Top>
        <Image src={experience.img} />
        <Body>
          <div style={{ fontWeight: "600", marginBottom: "3px" }}>{experience.role}</div>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <DDescription>
        <div>{experience.desc}</div>
        <SSkills>
          <b>Skills</b>
          <IW>
            {experience.skills.map((skill, index) => (
              <Skill key={index}>• {skill}</Skill>
            ))}
          </IW>
        </SSkills>
      </DDescription>
    </VerticalTimelineElement>
  );
};

export default Cards;
