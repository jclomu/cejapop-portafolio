// src/pages/About.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Barra from '../components/Barra';
import TextoAbout from '../components/TextoAbout';
import RedesSociales from '../components/RedesSociales';

const StyledRedesSociales = styled(RedesSociales)`
  display: flex;
  justify-content: center;
`;



function Contact() {
  return (
    <>
      <Barra />
        <Container>
          <StyledRedesSociales />
        </Container>
        
      </>
  );
}

export default Contact;
