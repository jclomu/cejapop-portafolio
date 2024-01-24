// src/pages/Tools.jsx
import React from 'react';
import Barra from '../components/Barra';
import { Button, Card, Container } from 'react-bootstrap';
import styled from 'styled-components';


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


function Tools() {
  return (
    <div>
      <Barra />
      <Container>
        <StyledTitulo>Herramientas Gratuitas</StyledTitulo>

        {/* TETRIS */}
          
        <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706095674/Portafolio%20Cejapop/Tools/production-check-google_ibytgq.png" />
            <Card.Body>
              <Card.Title>Producción Musical Checkbox</Card.Title>
              <Card.Text>
              Controla tus producciones de forma optima con Google Hojas de Calculo.
              </Card.Text>
              <Button variant="dark" href="https://docs.google.com/spreadsheets/d/1cP-vZZV-pFsW9FlERCvD8HBijd5ALf2gW7VK1LT0HUY/edit?usp=drive_link">Obtener</Button>
            </Card.Body>
          </Card>
      </Container>
    </div>
  );
}

export default Tools;
