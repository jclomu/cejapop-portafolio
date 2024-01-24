import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: #fff;
  transition: flex 0.4s ease;
  position: relative;
  
  &:hover {
    flex: 2;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  transition: background-color 0.8s ease;

  ${Section}:hover & {
    background-color: rgba(0, 0, 0, 0.95);
  }
`;

const Content = styled.div`
  z-index: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MusicSection = styled(Section)`
  background-image: url(https://res.cloudinary.com/dbtupr3la/image/upload/v1705963432/Portafolio%20Cejapop/Panel/cejon-estudio-labestia.jpg);
`;

const DevWebSection = styled(Section)`
  background-image: url(https://res.cloudinary.com/dbtupr3la/image/upload/v1705963607/Portafolio%20Cejapop/Panel/devweb.jpg);
`;

const UtilidadesSection = styled(Section)`
  background-image: url(https://res.cloudinary.com/dbtupr3la/image/upload/v1705963742/Portafolio%20Cejapop/Panel/herramientas-gratis.jpg);
`;

const AboutSection = styled(Section)`
  background-image: url(https://res.cloudinary.com/dbtupr3la/image/upload/v1706095071/Portafolio%20Cejapop/Panel/cejon_chfvlm.jpg);
`;

const Title = styled.h1`
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(150%);
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 2px solid #ddd;
    border-radius: 8px;
    color: black;
  }
`;



function Panel() {
  return (
    <Container>
    <MusicSection>  
      <Content>
        <StyledLink to="/music">
          <Title>Música</Title>
        </StyledLink>
      </Content>
      <Overlay />
    </MusicSection>

    <DevWebSection>
      <Content>
        <StyledLink to="/devweb">
          <Title>DevWeb</Title>
        </StyledLink>
      </Content>
      <Overlay />
    </DevWebSection>
    <UtilidadesSection>
    <Content>
        <StyledLink to="/tools">
          <Title>Descargas</Title>
        </StyledLink>
      </Content>
    <Overlay />
    </UtilidadesSection>
    <AboutSection>
    <Content>
        <StyledLink to="/about">
          <Title>Conóceme</Title>
        </StyledLink>
      </Content>
      <Overlay />
    </AboutSection>

    
  </Container>
  )
}

export default Panel
