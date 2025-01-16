// import { Container as MUIContainer } from '@mui/material'; // Renamed the imported Container to MUIContainer
import styled from 'styled-components';
import React from 'react';

const CContainer = styled.div`  // Renamed the styled Container to StyledContainer
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
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
  margin-top: 20px;
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

const Experience = () => {
  return (
    <CContainer id="Education">  
      <Wrapper>
        <Title>Experience</Title> {/* Fixed typo here (xperience -> Experience) */}
        <Desc>
          My Work Experience
        </Desc>
      </Wrapper>
    </CContainer>
  );
};

export default Experience;
