import React from 'react';
import styled from 'styled-components';
import {Bio} from "../../data/constants.js";
import Typewriter from "typewriter-effect";

const HeroContainer = styled.div`
display: flex;
flex-direction: row;
postion:  relative;
justify-content: center;
padding: 60px 20px;
z-index: 1;

@media(max-width: 960px){
padding: 46px 14px;
}

@media(max-width: 640px){
padding: 32px 14px;
}

`;


const HeroInnerContainer = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
align-items: center;
justify-content: space-evenly;

@media(max-width: 960px){
flex-direction:column;
}
`;
const HeroRightContainer = styled.div`
  order: 2;
  background: blue;
  width: 100%;

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    order: 1;
    margin-bottom: 20px;
    display: flex;
    align-items: center; // Fixed colon issue
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  order: 1;
  width: 100%;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 55px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 20px;
    display: flex;
    align-items: center; // Fixed colon issue
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-weight: 600;
  margin-top: 10px;
  font-size: 37px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 42px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 8px; 
  }
`;

const TextLoop = styled.div`
  font-weight: 400;
  margin-top: 10px;
  font-size: 28px;
  gap: 8px;
  display: flex;
  color: ${({ theme }) => theme.text_primary};
  line-height: 42px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 18px; 
  }
`;

const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;


const SubTitle = styled.div`
// font-weight: 200;
margin-top: 10px;
font-size: 15px;
margin-bottom: 20px;
padding-right: 12px;
// gap: 8px;
// align-items:center;
// justify-content: center;
text-align: justify;
  text-justify: inter-word;
    color: ${({ theme }) => theme.text_primary + 85};

  @media (max-width: 960px) {
font-size: 10px;
padding: 0 0 0px;
line-height:14px;
}
`;

const Hero = () => {
  return (
    <div id= "About">
      <HeroContainer>
        <HeroInnerContainer>
            <HeroLeftContainer>
              <Title>Hi! I am <br /> {Bio.name} </Title>
              <TextLoop >I am a
                <Span>
                  <Typewriter options ={{
                strings: Bio.roles,
                autoStart: true,
                loop:true,
              }}/>
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
            </HeroLeftContainer>
            <HeroRightContainer>Right</HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero;
