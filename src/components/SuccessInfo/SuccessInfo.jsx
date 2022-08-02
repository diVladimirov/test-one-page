import React from 'react';
import SuccessImg from '../../assets/image/success-image.jpg';
import { SuccessWrapper, SuccesTitle, SuccessImage } from './SuccessInfo.styled';

const SuccessInfo = () => {
  return (
    <SuccessWrapper>
      <SuccesTitle>User successfully registered</SuccesTitle>
      <SuccessImage src={SuccessImg} alt="Success Img" />
    </SuccessWrapper>
  );
};

export default SuccessInfo;
