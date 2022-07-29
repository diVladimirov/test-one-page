import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormWrapper, FormTitle, FormStyled, ButtonStyled } from './Form.styled';

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
      position: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      phone: Yup.string(),
      position: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  return (
    <FormWrapper>
      <FormTitle>Working with POST request</FormTitle>
      <FormStyled onSubmit={formik.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <p>Select your position</p>
        {positions.map(position => (
          <label key={position.id}>
            <input
              type="radio"
              name="position"
              checked={formik.values.position === position.name}
              value={position.name}
              onChange={formik.handleChange}
            />
            {position.name}
          </label>
        ))}
        <div>
          <input type="file" id="photo" name="photo" accept="image/*" />
          <label htmlFor="photo">
            <span>Upload</span>
            <span>Upload your photo</span>
          </label>
        </div>
        <ButtonStyled type="submit">Sign up</ButtonStyled>
      </FormStyled>
    </FormWrapper>
  );
};

export default Form;
