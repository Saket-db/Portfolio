// import { Container as MUIContainer } from '@mui/material'; // Renamed the imported Container to MUIContainer
import styled from 'styled-components';
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../../data/constants';
import Cards from '../Cards/Cards';
import "react-vertical-timeline-component/style.min.css";
// import {Tilt} from "react-tilt";

const CContainer = styled.div` 
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
  position: relative;
  mwrgin-top: 40px;
  flex-direction: row;
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
  gap: 20px; /* Increased gap for better spacing */
  align-items: center;

  @media (max-width: 960px) {
    padding: 0 20px; /* Add horizontal padding for mobile view */
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
    font-size: 30px;
    font-weight: 500;
    line-height: 1.4; 
  }
`;

const Desc = styled.div`
  font-size: 16px;
  padding: 0px 20px; 
  text-align: center;
  color: ${({ theme }) => theme.text_secondary + 95};

  @media (max-width: 760px) {
    font-size: 16px; 
    line-height: 1.5; 
    padding: 0 15px; 
  }
`;


// const TiltWrapper = styled(Tilt)`
//   // width: calc(50% - 20px);
//   // max-width: 500px;

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
        <Title>Experience & Extracurriculars</Title> 
         <Desc>
          My experience and extracurriculars are a mix of academic and professional endeavors that have helped me develop
        </Desc>
        <VerticalTimeline >
          {/* <TiltWrapper options={{ max: 5, scale: 1, speed: 30 }}> */}
          {experiences.map((experience, index) =>(
            <Cards key = {`experience - ${index}`}
            experience = {experience}
            />
          ))}
          {/* </TiltWrapper> */}
        </VerticalTimeline>
      </Wrapper>
    </CContainer>
  );
};

export default Experience;
