// src/components/TextoAbout.jsx
import React from 'react';
import styled from 'styled-components';

const StyledTexto = styled.p`
  font-size: 18px;
  color: #555;
  text-align: justify;
  margin: 20px auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

function TextoAbout() {
  return (
    <>
      <StyledTexto>
        I studied Engineering in Control and Automation at National Polytechnic Institute (IPN). I stay updated with Web Development courses and have been developing multiplatform systems and webpages.
      </StyledTexto>
      <StyledTexto>
        In addition to my technical background, I'm a passionate creative and musician.</StyledTexto>
      <StyledTexto>
        This digital space is dedicated to offering innovative solutions in both the digital and musical fields, and if possible, combining both. I love the idea of creating projects that integrate my two passions.
      </StyledTexto>
      <StyledTexto>
        If you think I could be the best fit for your needs, don't hesitate to contact me. I'm sure we can make a great team.      </StyledTexto>
      <StyledTexto>
        Thank you for visiting!
      </StyledTexto>
      <StyledTexto>
        Best regards.
      </StyledTexto>
    </>






  );
}

export default TextoAbout;
