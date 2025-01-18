import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { Tilt } from 'react-tilt';

const Container = styled.div`
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

const SkillContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  margin-top: 15px;
  justify-content: space-evenly;
  gap: 20px;
`;

const TiltWrapper = styled(Tilt)`
  width: calc(50% - 20px);
  max-width: 500px;

  @media (max-width: 760px) {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 310px;
  }
`;

const Skill = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-shadow: rgba(23, 93, 230, 0.15) 0px 4px 24px;
  background-color: ${({ theme }) => theme.card + 'CC'}; 
  padding: 15px 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(23, 93, 230, 0.35) 0px 8px 24px;
  }

  @media (max-width: 760px) {
    padding: 10px 24px;
    &:hover {
      transform: none;
      box-shadow: rgba(23, 93, 230, 0.15) 0px 4px 16px;
    }
  }

  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  transition: max-height 0.3s ease;

  @media (min-width: 761px) {
    max-height: none;
    overflow: visible;
    transition: none;
  }
`;

const SkillItem = styled.div`
  font-size: 12px;
  font-weight: 400;
  width: calc(50% - 10px);
  max-width: 150px;
  height: 40px;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 11px;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: ${({ theme }) => theme.bgLight + 'CC'};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_on_primary};
    transform: scale(1.05);
  }

  @media (max-width: 760px) {
    width: calc(50% - 10px);
    padding: 7px 10px;
  }

  @media (max-width: 500px) {
    width: calc(50% - 10px);
    padding: 6px 8px;
    max-width: 140px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;

  ${SkillItem}:hover & {
    transform: rotate(360deg);
  }
`;

const Skills = () => {
  const [openIndexes, setOpenIndexes] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc style={{ marginBottom: '20px' }}>
          I am a Front-End Developer with a certification as a MongoDB Associate Developer.
        </Desc>
        <SkillContainer>
          {skills.map((skill, index) => (
            <TiltWrapper key={`tilt-${index}`} options={{ max: 25, scale: 1, speed: 300 }}>
              <Skill>
                <SkillTitle onClick={() => toggleDropdown(index)}>{skill.title}</SkillTitle>
                <SkillList isOpen={isMobile ? openIndexes[index] : true}>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-item-${index_x}`}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </TiltWrapper>
          ))}
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
