import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  height: 60px;
  padding: 13px 0 13px 0;
  border: 1px solid red;
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
  background: #f4e041;
  padding: 4px;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  :not(:last-child) {
    margin-right: 10px;
  }
`;
