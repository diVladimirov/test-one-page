import styled from 'styled-components';
import Hero480 from '../../assets/image/hero480.jpg';
import Hero768 from '../../assets/image/hero768.jpg';
import Hero1024 from '../../assets/image/hero1024.jpg';
import Hero1170 from '../../assets/image/hero1170.jpg';

export const HeroWrapperStyled = styled.div`
  height: 500px;
  border: 1px solid red;
  text-align: center;
  background: url(${Hero480});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 360px) {
    background: url(${Hero768});
  }

  @media screen and (min-width: 768px) {
    background: url(${Hero1024});
  }

  @media screen and (min-width: 1024px) {
    background: url(${Hero1170});
    height: 650px;
  }
`;

export const DescriptionWrapper = styled.div`
  /* margin-top: 40px;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
  margin-left: auto;
  margin-right: auto; */
  margin-top: 40px;
  max-width: 380px;
  border: 1px solid red;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-top: 89px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 164px;
  }
`;

export const TitleStyled = styled.h1`
  font-size: 40px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 21px;
  border: 1px solid red;
`;

export const DescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 32px;
`;
