import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  FormTitle,
  FormStyled,
  MainLabelStyled,
  MainInputStyled,
  MainLabelPlaceholderStyled,
  PhoneDescription,
  PositionDescription,
  PositionWrapper,
  PositionLabelStyled,
  PositionRadioStyled,
  ButtonWrapper,
  ButtonStyled,
  InputPhotoWrapper,
  InputPhotoStyled,
  LabelPhotoStyled,
  InputPhotoDescriptionBefore,
  InputPhotoDescriptionAfter,
  ErrorTextStyled,
  HelperAndErrorTextWrapper,
} from './Form.styled';

const Form = () => {
  const positions = [
    {
      id: 1,
      name: 'Lawyer',
    },
    {
      id: 2,
      name: 'Content manager',
    },
    {
      id: 3,
      name: 'Security',
    },
    {
      id: 4,
      name: 'Designer',
    },
  ];
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: 1,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, 'Username should contain 2-60 characters')
        .max(60, 'Username should contain 2-60 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Email must be a valid email')
        .min(2, 'Email must be a valid email')
        .max(100)
        .matches(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          'Email must be a valid email',
        )
        .required('Email is required'),
      phone: Yup.string()
        .max(13)
        .matches(/^([+]{0,1}380([0-9]{9})$)/, 'Phone should start with code of Ukraine +380')
        .required('Phone is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  return (
    <FormWrapper>
      <FormTitle>Working with POST request</FormTitle>
      <FormStyled onSubmit={formik.handleSubmit} id="signup">
        {formik.touched.name && formik.errors.name ? (
          <MainLabelStyled>
            <MainInputStyled
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
              withError
            />
            <MainLabelPlaceholderStyled withError>Your name</MainLabelPlaceholderStyled>
          </MainLabelStyled>
        ) : (
          <MainLabelStyled>
            <MainInputStyled
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
            />
            <MainLabelPlaceholderStyled>Your name</MainLabelPlaceholderStyled>
          </MainLabelStyled>
        )}
        {formik.touched.name && formik.errors.name ? (
          <ErrorTextStyled>{formik.errors.name}</ErrorTextStyled>
        ) : null}
        {formik.touched.email && formik.errors.email ? (
          <MainLabelStyled>
            <MainInputStyled
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              withError
            />
            <MainLabelPlaceholderStyled withError>Email</MainLabelPlaceholderStyled>
          </MainLabelStyled>
        ) : (
          <MainLabelStyled>
            <MainInputStyled
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
            <MainLabelPlaceholderStyled>Email</MainLabelPlaceholderStyled>
          </MainLabelStyled>
        )}

        {formik.touched.email && formik.errors.email ? (
          <ErrorTextStyled>{formik.errors.email}</ErrorTextStyled>
        ) : null}
        {formik.touched.phone && formik.errors.phone ? (
          <MainLabelStyled>
            <MainInputStyled
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              required
              withError
            />
            <MainLabelPlaceholderStyled withError>Phone</MainLabelPlaceholderStyled>
          </MainLabelStyled>
        ) : (
          <MainLabelStyled>
            <MainInputStyled
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              required
            />
            <MainLabelPlaceholderStyled>Phone</MainLabelPlaceholderStyled>
          </MainLabelStyled>
        )}

        <HelperAndErrorTextWrapper>
          {formik.touched.phone && formik.errors.phone ? (
            <ErrorTextStyled>{formik.errors.phone}</ErrorTextStyled>
          ) : null}
          <PhoneDescription>+38 (XXX) XXX - XX - XX</PhoneDescription>
        </HelperAndErrorTextWrapper>

        <PositionDescription>Select your position</PositionDescription>
        <PositionWrapper>
          {positions.map(position => (
            <PositionLabelStyled key={position.id}>
              <PositionRadioStyled
                type="radio"
                name="position"
                checked={Number(formik.values.position) === position.id}
                value={position.id}
                onChange={formik.handleChange}
              />
              {position.name}
            </PositionLabelStyled>
          ))}
        </PositionWrapper>

        <InputPhotoWrapper>
          <InputPhotoStyled type="file" id="photo" name="photo" accept="image/*" />
          <LabelPhotoStyled htmlFor="photo">
            <InputPhotoDescriptionBefore>Upload</InputPhotoDescriptionBefore>
            <InputPhotoDescriptionAfter>Upload your photo</InputPhotoDescriptionAfter>
          </LabelPhotoStyled>
        </InputPhotoWrapper>
        <ButtonWrapper>
          <ButtonStyled type="submit">Sign up</ButtonStyled>
        </ButtonWrapper>
      </FormStyled>
    </FormWrapper>
  );
};

export default Form;
