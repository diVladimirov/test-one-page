import styled from 'styled-components';

export const ListSectionStyled = styled.section`
  padding: 140px 0;
  border: 1px solid red;
  text-align: center;
`;

export const TitleStyled = styled.h2`
  font-size: 40px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.87);
`;

export const UlStyled = styled.ul`
  border: 1px solid red;
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
  border: 1px solid red;
  max-width: 704px;
  height: 254px;
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
`;
