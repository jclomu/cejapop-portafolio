import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const ContainerStyle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const IconItem = styled(ListGroup.Item)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px; // Ajusta la altura según sea necesario
  width: 50px;  // Ajusta el ancho según sea necesario
  margin: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const SvgIcon = styled.div`
  height: 50px; // Ajusta la altura según sea necesario
  width: 50px;  // Ajusta el ancho según sea necesario
  margin: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;

function RedesSociales() {
  return (
    <ContainerStyle>
      {/* INSTAGRAM */}
      <a href="https://www.instagram.com/yo.cejon/" target="_blank" rel="noopener noreferrer">
        <IconItem style={{ backgroundImage: 'url("https://res.cloudinary.com/dbtupr3la/image/upload/v1706101521/Portafolio%20Cejapop/RRSS/instagram_bkcaym.png")' }}>
        </IconItem>
      </a>

      {/* GITHUB */}
      <a href="https://github.com/jclomu" target="_blank" rel="noopener noreferrer">
        <IconItem style={{ backgroundImage: 'url("https://res.cloudinary.com/dbtupr3la/image/upload/v1706101520/Portafolio%20Cejapop/RRSS/signo-de-github_b2pgtu.png")' }}>
        </IconItem>
      </a>

      {/* WHATSAPP */}
      <a href="https://wa.me/525578972895" target="_blank" rel="noopener noreferrer">
        <IconItem style={{ backgroundImage: 'url("https://res.cloudinary.com/dbtupr3la/image/upload/v1706101520/Portafolio%20Cejapop/RRSS/whatsapp_ri7hrk.png")' }}>
        </IconItem>
      </a>

      {/* SVG ICON */}
      <a href="mailto:cejapop@gmail.com" target="_blank" rel="noopener noreferrer">
        <SvgIcon>
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#fff" height="512" rx="15%" width="512"/>
            <path d="m158 391v-142l-82-63v175q0 30 30 30" fill="#4285f4"/>
            <path d="m154 248 102 77 102-77v-98l-102 77-102-77" fill="#ea4335"/>
            <path d="m354 391v-142l82-63v175q0 30-30 30" fill="#34a853"/>
            <path d="m76 188 82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"/>
            <path d="m436 188-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"/>
          </svg>
        </SvgIcon>
      </a>
    </ContainerStyle>
  );
}

export default RedesSociales;
