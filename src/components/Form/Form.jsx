import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getPositions } from '../../services/api';
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
  CheckRadio,
} from './Form.styled';

const Form = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      const { positions } = await getPositions();
      setPositions(positions);
    };

    fetchPositions();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: 1,
      photo: '',
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
      photo: Yup.mixed().required('Photo is required'),
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
              <CheckRadio></CheckRadio>
              {position.name}
            </PositionLabelStyled>
          ))}
        </PositionWrapper>

        <InputPhotoWrapper>
          {formik.touched.photo && formik.errors.photo ? (
            <LabelPhotoStyled htmlFor="photo">
              <InputPhotoStyled
                type="file"
                id="photo"
                name="photo"
                accept=".jpg, .jpeg"
                onChange={events => {
                  formik.setFieldValue('photo', events.target.files[0]);
                }}
              />
              <InputPhotoDescriptionBefore withError>Upload</InputPhotoDescriptionBefore>
              <InputPhotoDescriptionAfter withError>
                {formik.values.photo ? formik.values.photo.name : 'Upload your photo'}
              </InputPhotoDescriptionAfter>
            </LabelPhotoStyled>
          ) : (
            <LabelPhotoStyled htmlFor="photo">
              <InputPhotoStyled
                type="file"
                id="photo"
                name="photo"
                accept=".jpg, .jpeg"
                onChange={events => {
                  formik.setFieldValue('photo', events.target.files[0]);
                }}
              />
              <InputPhotoDescriptionBefore>Upload</InputPhotoDescriptionBefore>
              <InputPhotoDescriptionAfter>
                {formik.values.photo
                  ? formik.values.photo.name.slice(0, 27) + '...'
                  : 'Upload your photo'}
              </InputPhotoDescriptionAfter>
            </LabelPhotoStyled>
          )}

          {formik.touched.photo && formik.errors.photo ? (
            <ErrorTextStyled>{formik.errors.photo}</ErrorTextStyled>
          ) : null}
        </InputPhotoWrapper>
        <ButtonWrapper>
          <ButtonStyled type="submit" disabled={!formik.dirty && !formik.isValid}>
            Sign up
          </ButtonStyled>
        </ButtonWrapper>
      </FormStyled>
    </FormWrapper>
  );
};

export default Form;
