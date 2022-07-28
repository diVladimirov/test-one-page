import React from 'react';
import { NavBarWrapper, UlStyled, LiStyled, LinkStyled } from './NavBar.styled';
import Logo from '../../assets/svg/logo.svg';

const Navbar = () => {
  return (
    <NavBarWrapper>
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      <UlStyled>
        <LiStyled>
          <LinkStyled href="/">Users</LinkStyled>
        </LiStyled>
        <LiStyled>
          <LinkStyled href="/">Sign up</LinkStyled>
        </LiStyled>
      </UlStyled>
    </NavBarWrapper>
  );
};

export default Navbar;
