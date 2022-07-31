import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding-bottom: 100px;
`;

export const FormTitle = styled.h3`
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 50px;
`;

export const FormStyled = styled.form`
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
`;
export const PhoneDescription = styled.span`
  margin-top: 4px;
  margin-left: 16px;
  font-size: 12px;
  line-height: 14px;
  color: #7e7e7e;
`;

export const MainLabelPlaceholderStyled = styled.span`
  position: absolute;
  left: 16px;
  top: 14px;
  font-size: 16px;
  line-height: 26px;
  color: ${props => (props.withError ? '#CB3D40' : '#7e7e7e')};
  transition: top 300ms ease;
  padding: 0 5px;
  border-radius: 4px;
`;
export const ErrorTextStyled = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #cb3d40;
  margin-left: 16px;
  margin-top: 4px;
  &:not(:last-of-type) {
    position: absolute;
  }
`;
export const MainInputStyled = styled.input`
  width: 100%;
  padding: 14px 0px 14px 16px;
  border: ${props => (props.withError ? '1px solid #CB3D40' : '1px solid #d0cfcf')};
  border-radius: 4px;
  outline: none;
`;
export const MainLabelStyled = styled.label`
  display: block;
  position: relative;

  ${MainInputStyled}:valid + ${MainLabelPlaceholderStyled},
  ${MainInputStyled}:focus + ${MainLabelPlaceholderStyled} {
    top: -14px;
    background: #ffffff;
  }

  :not(:first-child) {
    margin-top: 50px;
  }
`;

export const PositionDescription = styled.p`
  margin-top: 25px;
  margin-bottom: 11px;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
`;

export const PositionWrapper = styled.div`
  display: grid;
  gap: 7px;
`;

export const PositionLabelStyled = styled.label`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckRadio = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d0cfcf;
  margin-right: 12px;
  padding: 4px;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    background: #00bdd3;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 300ms ease;
  }
`;
export const PositionRadioStyled = styled.input`
  display: none;

  &:checked + ${CheckRadio} {
    border: 1px solid #00bdd3;
  }
  &:checked + ${CheckRadio}::after {
    transform: scale(1);
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const ButtonStyled = styled.button`
  width: 100px;
  border-radius: 80px;
  background: #f4e041;
  padding: 4px;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);

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

export const InputPhotoWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 47px;
  margin-bottom: 50px;
`;

export const InputPhotoStyled = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const LabelPhotoStyled = styled.label`
  display: flex;
  cursor: pointer;
`;

export const InputPhotoDescriptionBefore = styled.span`
  width: 83px;
  height: 54px;
  border: ${props => (props.withError ? '1px solid #CB3D40' : '1px solid rgba(0, 0, 0, 0.87)')};
  border-radius: 4px 0px 0px 4px;
  font-size: 16px;
  line-height: 26px;
  padding: 14px 15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const InputPhotoDescriptionAfter = styled.span`
  height: 54px;
  width: 100%;
  border: ${props => (props.withError ? '1px solid #CB3D40' : '1px solid #d0cfcf')};
  border-radius: 0px 4px 4px 0px;
  font-size: 16px;
  line-height: 26px;
  padding: 14px 0px 14px 16px;
  text-align: left;
  color: #7e7e7e;
`;

export const HelperAndErrorTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
