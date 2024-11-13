
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url('Assets/Iteration-1-assets/home-banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const H1 = styled.h1`
  width: 80%;
  color: #FAF7F2;
  font-family: "Roboto Condensed";
  font-weight: 900;
  text-align: center;
  padding-top: 10vh;
  font-size: 2rem;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  font-family: "Roboto Condensed";
  font-size: 4rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-align: center;
  color: #FAF7F2;
  margin: 2% 0;
`;

export const Button = styled.button`
  width: 13rem;
  height: 3.5rem;
  background-color: #FDC913;
  color: #292929;
  font-family: Roboto Condensed;
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 2%;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  }
`;
