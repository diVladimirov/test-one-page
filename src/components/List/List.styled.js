import styled from 'styled-components';

export const ListSectionStyled = styled.section`
  padding: 140px 0;
  text-align: center;
`;

export const TitleStyled = styled.h2`
  font-size: 40px;
  line-height: 40px;
  color: ${props => props.theme.colors.primaryTextColor};
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
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 20px;
  max-height: 26px;
`;

export const UserInfoStyled = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${props => props.theme.colors.primaryTextColor};
`;

export const ButtonStyled = styled.button`
  width: 120px;
  border-radius: 80px;
  background: ${props => props.theme.colors.primaryColor};
  padding: 4px;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-top: 50px;

  &:disabled {
    background: ${props => props.theme.colors.disabledColor};
    color: ${props => props.theme.colors.secondaryTextColor};
    cursor: default;
  }
`;

export const LoadingWrapper = styled.div`
  margin-top: 50px;
`;
