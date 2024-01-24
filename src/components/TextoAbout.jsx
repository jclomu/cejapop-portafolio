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
      Soy Julio, muchos me conocen como Cejón, de ahí la raíz de "CejaPOP", tengo 29 años. Politécnico por convicción, Desarrollador por progreso y Músico por naturaleza ¿o era pasión? 
    </StyledTexto>  
   <StyledTexto>
      Soy Técnico en Sistemas de Control e Ing. truncado en Control y Automatización del IPN, continuamente me actualizo con diplomados de Desarrollo Web Full Stack y llevo un par de años desarrollando sistemas multiplataforma utilizando Técnologías como APPSHEET, REACT, PYTHON Y PHP.
    </StyledTexto>  
   <StyledTexto>
      También estudié piano y guitarra en Gmartell pero donde me "curtí musicalmente" fue escenarios, giras y estudios. He desempeñado en la industria musical como Instrumentista, Productor, Ing de Audio o Staff durante 15 años.   
    </StyledTexto>  
    <StyledTexto>
      Bueno, para no hacerte el cuento tan largo, éste espacio digital está enfocado en ofrecer soluciones digitales o musicales y si se puede ambas, ¿Qué mejor para mí?... 
    </StyledTexto>  
    <StyledTexto>
        No dudes en contactarme si consideras que soy la mejor opción para ti, seguro haremos buen equipo.
    </StyledTexto>  
    <StyledTexto>
        Gracias tu visita.
    </StyledTexto>  
    <StyledTexto>
        Chao    
    </StyledTexto>  
   </> 



      

    
  );
}

export default TextoAbout;
