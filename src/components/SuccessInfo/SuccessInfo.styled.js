import styled from 'styled-components';

export const SuccessWrapper = styled.div`
  text-align: center;
  height: 400px;
  padding-bottom: 100px;
`;

export const SuccesTitle = styled.h4`
  font-size: 40px;
  line-height: 40px;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 50px;
`;

export const SuccessImage = styled.img`
  margin-left: auto;
  margin-right: auto;
`;
