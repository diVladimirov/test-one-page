import styled from 'styled-components';

export const ListSectionStyled = styled.section`
  padding: 140px 0;
  text-align: center;
`;

export const TitleStyled = styled.h2`
  font-size: 40px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.87);
`;

export const UlStyled = styled.ul`
  margin-top: 50px;
  display: grid;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 254px);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const LiStyled = styled.li`
  @media screen and (max-width: 767px) {
    max-width: 704px;
  }
  height: 254px;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const ImageStyled = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  margin-bottom: 20px;
`;

export const UserTitleStyled = styled.h3`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 20px;
  max-height: 26px;
`;

export const UserInfoStyled = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
`;

export const ButtonStyled = styled.button`
  width: 120px;
  border-radius: 80px;
  background: #f4e041;
  padding: 4px;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 50px;

  &:disabled {
    background: #b4b4b4;
    color: rgba(255, 255, 255, 0.87);
    cursor: default;
  }
  &:hover,
  :focus {
    background: #ffe302;
  }
`;
