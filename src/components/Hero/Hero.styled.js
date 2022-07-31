import styled from 'styled-components';
import Hero480 from '../../assets/image/hero480.jpg';
import Hero768 from '../../assets/image/hero768.jpg';
import Hero1024 from '../../assets/image/hero1024.jpg';
import Hero1170 from '../../assets/image/hero1170.jpg';

export const HeroWrapperStyled = styled.div`
  height: 500px;
  text-align: center;
  background: url(${Hero480});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;

  @media screen and (min-width: 360px) {
    background: url(${Hero768});
  }

  @media screen and (min-width: 768px) {
    background: url(${Hero1024});
    padding-top: 89px;
  }

  @media screen and (min-width: 1024px) {
    background: url(${Hero1170});
    height: 650px;
    padding-top: 164px;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleStyled = styled.h1`
  font-size: 40px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 21px;
`;

export const DescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 32px;
`;
