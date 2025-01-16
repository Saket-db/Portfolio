import React from 'react';
import styled from 'styled-components';
import {Bio} from "../../data/constants.js";
import Typewriter from "typewriter-effect";
import IMG_3476 from "../../Images/IMG_3476.jpg";
import HeroBgAn from "../HeroBgAnimation";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import { headContainerAnimation, headTextAnimation} from '../../utils/motion.js';
import StarCanvas from '../Canvas/Stars.jsx';


const HeroContainer = styled.div`
display: flex;
flex-direction: row;
position: relative; 
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
  z-index: 2; /* Ensure it's above HeroBg */
  position: relative; /* Create a stacking context */

  @media(max-width: 960px){
flex-direction:column;
}
`;


const HeroRightContainer = styled.div`
  order: 2;
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
    font-size: 34px;
    line-height: 36px;
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
    justify-content:center;
    font-size: 24px;
    line-height: 22px;
    margin-bottom: 11 px; 
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
margin-bottom: 13px;
padding-right: 12px;
// gap: 8px;
// align-items:center;
// justify-content: center;
text-align: justify;
  text-justify: inter-word;
    color: ${({ theme }) => theme.text_primary + 85};

  @media (max-width: 960px) {
font-size: 17px;
padding: 0 0 0px;
line-height:20px;
}
`;

const ResumeButton = styled.a`
width: content;
-webkist-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
padding: 16px;
align-items:center;
font-weight:700;
font-size: 19px;
text-decoration: none;
justify-content: center;
background-color: ${({ theme }) => theme.primary};
cursor:pointer;
border-radius: 25px;
color: ${({ theme }) => theme.text_primary};

@media (max-width: 960px)
{
font-size: 14px;
font-weight:600;
};

box-shadow: 2px 3px 15px;
border-radius: 20px;
font-size: 18px;
font-weight: 600;

&: hover {
transfomr scale(1.1);
transition: all 0.4s ease-in-out;
box-shadow: 2px 3px 15px;
filter: brightness(1);
}
`;

const Img = styled.img`
  border-radius: 50%;
  max-width: 350px;
  max-height: 350px;
  width: 100%;
  height: auto;
  margin-left: 135px; 
  border: 2px solid ${({ theme}) => theme.text_primary};
  z-index: 3;
  position: relative;

@media (max-width: 640px)
{
max-width: 200px;
max-height: 200px;
margin-left: 0px;
};
  // padding-left: 20px;
`;

const HeroBg = styled.div`
position: absolute;
display:flex;
top: 50%;
bottom: 0;
right: 0;
left: 50%;
width: 100%;
height: 100%;
max-width: 1250px;
justify-content: end;
transform: translateX(-50%) translateY(-50%);
z-index: 0;

@media (max-width: 640px)
{
top: 42%;
}

`;

const Hero = () => {
  return (
    <div id= "About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAn />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
        <HeroInnerContainer>
            <HeroLeftContainer>
            <motion.div {...headTextAnimation}>
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
              </motion.div>    
              <motion.div {...headContainerAnimation}>          
              <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href = {Bio.resume} target = "_blank">Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
            <motion.div {...headContainerAnimation}>
              <Tilt>
                <Img src = {IMG_3476} alt ="Saket" />
              </Tilt>
              </motion.div>
              </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default Hero;
