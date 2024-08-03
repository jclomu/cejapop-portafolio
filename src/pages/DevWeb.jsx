// src/pages/DevWeb.jsx
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Barra from '../components/Barra';
import styled from 'styled-components';
import Grid from '../components/Grid';

const StyledTitulo = styled.h2`
  font-size: 80px;
  font-weight: bold;
  color: #2d2d2d;
  text-align: center;
  margin: 50px auto;
  padding: 20px 0;
  letter-spacing: 1px;
  background: linear-gradient(to right, #ff6b6b, #ffb366);
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

function DevWeb() {

return (
  <>
    <Barra />
    <Container>
      <StyledTitulo>Web Development</StyledTitulo>
      <Grid />
        
    </Container>
  </>
);
}

export default DevWeb;
