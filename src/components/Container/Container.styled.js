import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 767px;
  padding: 0px 16px 0px 16px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;

  @media screen and (min-width: 768px) {
    max-width: 1023px;
    padding: 0px 32px 0px 32px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1170px;
    padding: 0px 60px 0px 60px;
  }
  @media screen and (min-width: 1170px) {
    padding: 0px;
  }
`;
