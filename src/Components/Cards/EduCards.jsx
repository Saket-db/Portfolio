    // import { School } from '@mui/icons-material';
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


    const School = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    @media only screen and (max-width: 768px) {
    font-size: 12px}
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

    const Degree = styled.div`
    font-size: 14px;
    font-weight: 500px;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
    font-size: 12px;
    }
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

    const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.text_secondary + 97};

    @media only screen and (max-width: 768px) {
        font-size: 12px;
        text-align: center;
    }
    `;

    const EduCards = ({ education }) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <VerticalTimelineElement
        icon={
            <img
            width="100%"
            height="100%"
            alt={education.school}
            style={{ borderRadius: "50%", border: "2px solid" }}
            src={education.img}
            />
        }
        contentStyle={{
            display: "flex",
            flexDirection: "column",
            background: theme.name === "dark" ? "rgb(0,0,0)" : "rgb(255,255,255)",
            color: theme.name === "light" ? "rgb(0,0,0)" : "rgb(255,255,255)",
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
        date={education.date}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <Top>
            <Image src={education.img} />
            <Body>
            <School>{education?.school}</School>
            <Degree>{education.degree}</Degree>
            <Date>{education.date}</Date>
            </Body>
        </Top>
        <Grade>
            <b>Grade</b>
            {education.grade}
        </Grade>
        <DDescription>
            <div>{education.desc}</div>
        </DDescription>
        </VerticalTimelineElement>
    );
    };

    export default EduCards;
