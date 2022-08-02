import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  height: 60px;
  padding: 13px 0 13px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UlStyled = styled.ul`
  display: flex;
`;

export const LiStyled = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const LinkStyled = styled.a`
  display: inline-block;
  width: 100px;
  border-radius: 80px;
  background: ${props => props.theme.colors.primaryColor};
  padding: 4px;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  color: ${props => props.theme.colors.primaryTextColor};
  :not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  :focus {
    background: ${props => props.theme.colors.hoverColor};
  }
`;
