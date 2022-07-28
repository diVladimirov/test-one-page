import React from 'react';
import {
  HeroWrapperStyled,
  DescriptionWrapper,
  TitleStyled,
  DescriptionStyled,
} from './Hero.styled';
import { LinkStyled } from '../NavBar/NavBar.styled';

const Hero = () => {
  return (
    <HeroWrapperStyled>
      <DescriptionWrapper>
        <TitleStyled>Test assignment for front-end developer</TitleStyled>
        <DescriptionStyled>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving
        </DescriptionStyled>
        <LinkStyled href="/">Sign up</LinkStyled>
      </DescriptionWrapper>
    </HeroWrapperStyled>
  );
};

export default Hero;
