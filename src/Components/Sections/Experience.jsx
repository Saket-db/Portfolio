// import { Container as MUIContainer } from '@mui/material'; // Renamed the imported Container to MUIContainer
import styled from 'styled-components';
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../../data/constants';
import Cards from '../Cards/Cards';
import "react-vertical-timeline-component/style.min.css";
// import {Tilt} from "react-tilt";

const CContainer = styled.div`  // Renamed the styled Container to StyledContainer
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
  // margin-top:30px;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1100px;
  gap: 10px;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 760px) {
    margin-top: 8px;
    font-size: 30px;
    font-weight: 500;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  padding: 0px 0px 0px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary + 95};
`;

// const TiltWrapper = styled(Tilt)`
//   width: calc(50% - 20px);
//   max-width: 500px;

//   @media (max-width: 760px) {
//     width: 100%;
//     max-width: 400px;
//   }

//   @media (max-width: 500px) {
//     width: 100%;
//     max-width: 310px;
//   }
// `;


const Experience = () => {
  return (
    <CContainer id="Education">  
      <Wrapper>
        <Title>Experience</Title> {/* Fixed typo here (xperience -> Experience) */}
        <Desc>
          My Work Experience
        </Desc>
        {/* <TiltWrapper key={`tilt-${index}`} options={{ max: 25, scale: 1, speed: 300 }}> */}
        <VerticalTimeline>
          {experiences.map((experience, index) =>(
            <Cards key = {`experience - ${index}`}
            experience = {experience}
            />
          ))}
        </VerticalTimeline>
        {/* </TiltWrapper> */}
      </Wrapper>
    </CContainer>
  );
};

export default Experience;
