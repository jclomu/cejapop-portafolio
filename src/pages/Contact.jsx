// src/pages/About.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Barra from '../components/Barra';
import RedesSociales from '../components/RedesSociales';

const StyledRedesSociales = styled(RedesSociales)`
  display: flex;
  justify-content: center;
`;

const StyledTitulo = styled.h2`
  font-size: 80px;
  font-weight: bold;
  color: #2d2d2d; /* Color del texto */
  text-align: center;
  margin: 50px auto;
  padding: 20px 0;
  letter-spacing: 1px;
  background: linear-gradient(to right, #ff6b6b, #ffb366); /* Degradado de fondo */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 48px;
    margin: 30px auto;
  }
`;



function Contact() {
  return (
    <>
      <Barra />
        <Container>
        <StyledTitulo>Contact me</StyledTitulo>

          <StyledRedesSociales />
        </Container>
        
      </>
  );
}

export default Contact;
