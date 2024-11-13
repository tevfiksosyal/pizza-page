import React from 'react';
import styled from 'styled-components';

const LastPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #CE2829;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px; 
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px; 
`;

const LogoImage = styled.img`
  height: 50px; 
`;

const TextContainer = styled.div`
  margin-top: 100px; 
`;

const Text = styled.p`
  font-size: 4rem; 
  font-weight: bold;
  margin: 0; 
  line-height: 1.2; 
`;

function OrderComplete() {
  return (
    <LastPage>
      <LogoContainer>
        <LogoImage src="Assets/Iteration-1-assets/logo.svg" alt="logo" />
      </LogoContainer>
      <TextContainer>
        <Text>TEBRIKLER!</Text>
        <Text>SIPARIŞINIZ ALINDI!</Text>
      </TextContainer>
    </LastPage>
  );
}

export default OrderComplete;
