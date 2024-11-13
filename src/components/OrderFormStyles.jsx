import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeadDiv = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  flex-grow: 1 ;
`;

export const H1 = styled.h1`
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 700;
`;

export const AnchorContainer = styled.div`
  display: flex;
  gap: 1rem; 
  position: absolute; 
  bottom: 10px; 
  left: 38%; 
  margin-top: 2rem; 
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white; 
  font-size: 1rem;
`;

export const PositionDiv = styled.div`
  width: 90vw; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  position: relative;
  padding: 0 5vw; 
  margin-top: 2rem; 
`;

export const Positionh3 = styled.h3`
  font-family: 'Barlow';
  position: absolute;
  top: -3rem; 
  left: 50%;
  transform: translateX(-91%);
  z-index: 1; 
`;

export const FirstParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  transform: translateX(1065%);
`;

export const RightParagraphContainer = styled.div`
  display: flex;
  gap: 6rem; 
  justify-content: flex-end;
  align-items: center;
  transform: translateX(-260%);
`;

export const RightParagraph = styled.p`
  text-align: right;
`;

export const LastParagraph = styled.p`
  width: 35vw; 
  margin: 0 33%; 
  padding: 1rem 5vw; 
  text-align: justify; 
  font-size: 0.95rem; 
  line-height: 1.5; 
  color: #5F5F5F;
  
`;
