import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';


const StyledHeading = styled.h4`
  display: inline-block;
  margin-bottom: 15px;  
  &::after {
    content: '*';
    color: red;      
    margin-left: 4px; 
  }
`;


const RadioGroup = styled(FormGroup)`
  margin-bottom: 10px;  
`;


const SizeSelectorContainer = styled(Form)`
  margin-top: 10px;   
`;

const SizeSelector = (props) => {
  const {selectedSize, setSelectedSize} = props;

  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <SizeSelectorContainer>
      <FormGroup>
        
        <StyledHeading>Boyut Seç</StyledHeading>

        
        <RadioGroup check>
          <Label check for="boyut-kucuk">
            <Input 
              type="radio" 
              name="boyut" 
              value="Küçük" 
              id="boyut-kucuk"
              onChange={handleSizeSelect} 
              checked={selectedSize === 'Küçük'} 
            />
            Küçük
          </Label>
        </RadioGroup>
        
        <RadioGroup check>
          <Label check for="boyut-orta">
            <Input 
              type="radio" 
              name="boyut" 
              value="Orta" 
              id="boyut-orta"
              onChange={handleSizeSelect} 
              checked={selectedSize === 'Orta'}
            />
            Orta
          </Label>
        </RadioGroup>

        <RadioGroup check>
          <Label check for="boyut-buyuk">
            <Input 
              type="radio" 
              name="boyut" 
              value="Büyük" 
              id="boyut-buyuk"
              onChange={handleSizeSelect} 
              checked={selectedSize === 'Büyük'}
            />
            Büyük
          </Label>
        </RadioGroup>
      </FormGroup>

    </SizeSelectorContainer>
  );
};

export default SizeSelector;
