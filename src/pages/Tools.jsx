// src/pages/Tools.jsx
import React from 'react';
import Barra from '../components/Barra';
import { Button, Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    <>
      <Barra />
      <Container>
        <StyledTitulo>Free Tools Downloads</StyledTitulo>

        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706095674/Portafolio%20Cejapop/Tools/production-check-google_ibytgq.png" />
              <Card.Body>
                <Card.Title>Checkbox for Music Producers</Card.Title>
                <Card.Text>
                  Control your productions optimally with Google Sheets.
                </Card.Text>
                <Button
                  variant="dark"
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/1cP-vZZV-pFsW9FlERCvD8HBijd5ALf2gW7VK1LT0HUY/edit?usp=drive_link">Obtener</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1722674290/Portafolio%20Cejapop/Sites/Screen_Shot_2024-08-03_at_2.37.56_hhh0sw.png" />
              <Card.Body>
                <Card.Title>JamaiKEYS BETA</Card.Title>
                <Card.Text>
                  MIDI and Sample Pack with ska organ grooves. +2600 files.
                </Card.Text>
                <Button
                  variant="dark"
                  target="_blank"
                  href="https://sites.google.com/view/jamaikeys/home">Obtener</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default Tools;
