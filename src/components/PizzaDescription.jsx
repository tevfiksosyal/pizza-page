
import React from 'react';
import { 
  PositionDiv, 
  Positionh3, 
  FirstParagraph, 
  RightParagraphContainer, 
  RightParagraph, 
  LastParagraph 
} from './OrderFormStyles'; 

const PizzaDescription = () => {
  return (
    <>
      <PositionDiv>
        <Positionh3>Pozistion Absolute Acı Pizza</Positionh3>
        <FirstParagraph>85.50₺</FirstParagraph>
        <RightParagraphContainer>
          <RightParagraph>4.9</RightParagraph>
          <RightParagraph>(200)</RightParagraph>
        </RightParagraphContainer>
      </PositionDiv>
      <LastParagraph>
        FrontEnd Dev olarak hala position:absolute kullanıyorsan. Bu çok acı pizza tam sana göre.
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
        daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan Italyan kökenli lezzetli bir yemektir.
        Küçük bir pizzaya bazen pizzetta denir.
      </LastParagraph>
    </>
  );
};

export default PizzaDescription;
