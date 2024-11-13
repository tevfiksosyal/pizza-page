
import React from 'react';
import { HeadDiv, H1, AnchorContainer, StyledLink } from './OrderFormStyles';

const Header = () => {
  return (
    <HeadDiv>
      <H1>Teknolojik Yemekler</H1>
      <AnchorContainer>
        <StyledLink to="/">Anasayfa</StyledLink>-
        <StyledLink to="/orderform">Sipariş oluştur</StyledLink>
      </AnchorContainer>
    </HeadDiv>
  );
};

export default Header;
    