import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
// import styled from "styled-components";


const Cards = ({experience}) => {
  return (
    <VerticalTimelineElement
    icon={<img 
    width= "100%" height="100%" alt = {experience.school} style={{borderRadius: "50%", objectFit: "Cover"}} src={experience.img} />}
    
    contentStyle={{display : "flex", flexDirection:"column", gap:"12px", background:"#1d1836", color:"#fff",borderRadius: "4px", border: "1px solid rgba(255,255,255,0.125)"}}
    
    contentArrowStyle = {{borderRight: "7px solid rgba(255, 255, 255, 0.3)", }}
    date={experience.date}
    >

      
    </VerticalTimelineElement>
  )
}

export default Cards
