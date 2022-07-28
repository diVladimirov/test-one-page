import React from 'react';
import { ListSectionStyled, TitleStyled, ButtonStyled, UlStyled, LiStyled } from './List.styled';

const List = () => {
  return (
    <ListSectionStyled>
      <TitleStyled>Working with GET request</TitleStyled>
      <UlStyled>
        <LiStyled></LiStyled>
        <LiStyled></LiStyled>
        <LiStyled></LiStyled>
        <LiStyled></LiStyled>
        <LiStyled></LiStyled>
        <LiStyled></LiStyled>
      </UlStyled>
      <ButtonStyled>Show more</ButtonStyled>
    </ListSectionStyled>
  );
};

export default List;
