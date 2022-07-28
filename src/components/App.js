import React from 'react';
import GlobalStyle from '../config/GlobalStyle';
import Container from './Container/Container';
import Hero from './Hero/Hero';
import Navbar from './NavBar/Navbar';
import List from './List/List';
import Form from './Form/Form';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Hero />
        <List />
        <Form />
      </Container>
    </>
  );
};

export default App;
