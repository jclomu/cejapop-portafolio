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
        I am a Technician in Control Systems with formation in Engineering in Control and Automation from the National Polytechnic Institute (IPN). I stay updated with Full Stack Web Development courses and have been developing multiplatform systems for several years using technologies such as AppSheet, React, and PHP.
      </StyledTexto>
      <StyledTexto>
        In addition to my technical background, I studied piano and guitar at Gmartell, but my true musical training happened on stages, tours, and recording studios. I have over 7 years of experience in the music industry, working as an instrumentalist, producer, audio engineer, and staff.</StyledTexto>
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
