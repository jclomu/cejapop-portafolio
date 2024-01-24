import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const iconStyle = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '50px',  // Ajusta la altura según sea necesario
  width: '50px',   // Ajusta el ancho según sea necesario
};

function RedesSociales() {
  return (
    <ListGroup horizontal>
        
        {/* INSTAGRAM */}
        <a href="https://www.instagram.com/yo.cejon/" target="_blank">
            <ListGroup.Item style={{ ...iconStyle, backgroundImage: 'url("https://res.cloudinary.com/dbtupr3la/image/upload/v1706101521/Portafolio%20Cejapop/RRSS/instagram_bkcaym.png")' }}>
        
        
            </ListGroup.Item>
        </a>
        
        {/* GITHUB */}
        <a href="https://github.com/jclomu" target="_blank">
            <ListGroup.Item style={{ ...iconStyle, backgroundImage: 'url("https://res.cloudinary.com/dbtupr3la/image/upload/v1706101520/Portafolio%20Cejapop/RRSS/signo-de-github_b2pgtu.png")' }}>
        
        
            </ListGroup.Item>
        </a>
        
        {/* WHATSAPP */}
        <a href="https://wa.me/525578972895?text=Hola%2C%20Cej%C3%B3n.%20Vi%20tu%20portafolio%20digital%20y%20estoy%20bastante%20interesado%20en%20que%20colaboremos." target="_blank">
            <ListGroup.Item style={{ ...iconStyle, backgroundImage: 'url("https://res.cloudinary.com/dbtupr3la/image/upload/v1706101520/Portafolio%20Cejapop/RRSS/whatsapp_ri7hrk.png")' }}>
       
            </ListGroup.Item>
        </a>
    </ListGroup>
  );
}

export default RedesSociales;
