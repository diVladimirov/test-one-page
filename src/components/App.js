import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../config/theme';
import GlobalStyle from '../config/GlobalStyle';
import Container from './Container/Container';
import Hero from './Hero/Hero';
import Navbar from './NavBar/Navbar';
import List from './List/List';
import Form from './Form/Form';
import Toast from './Toast/Toast';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Navbar />
          <Hero />
          <List />
          <Form />
        </Container>
        <Toast />
      </ThemeProvider>
    </>
  );
};

export default App;
