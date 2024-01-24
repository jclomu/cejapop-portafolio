// src/pages/DevWeb.jsx
import React from 'react';
import NavBar from '../components/Barra';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Barra from '../components/Barra';
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

function DevWeb( ) {

  return (
    <>
      <Barra />
      <Container>
      <StyledTitulo>Mis sitios y aplicaciones web</StyledTitulo>
        
        {/* GRUPO 1 */}
        
        <CardGroup>
          
          {/* TETRIS */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074609/Portafolio%20Cejapop/Sites/Tetris_kise4d.png" />
            <Card.Body>
              <Card.Title>TETRIS JS</Card.Title>
              <Card.Text>
              Clásico juego de Tetris elaborado con JavaScript.
              </Card.Text>
              <Button variant="dark" href="https://tetris-byjclomu.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* 5ta dimensión */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074608/Portafolio%20Cejapop/Sites/5_Dimension_ytttby.png" />
            <Card.Body>
              <Card.Title>QUINTA DIMENSION</Card.Title>
              <Card.Text>
              Crea un agujero negro que deforma un area determinada. Implementado en JavaScript.
              </Card.Text>
              <Button variant="dark" href="https://shapes-byjclomu.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    
        
        {/* GRUPO 2 */}
        
        <CardGroup>
          
          {/* PACK CREATIVE TIM 1 */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074610/Portafolio%20Cejapop/Sites/Pack_Creative_Tim_ghbqta.png" />
            <Card.Body>
              <Card.Title>PACK COMPONENTES</Card.Title>
              <Card.Text>
              Paquete de elementos con librería de Bootstrap. Adaptable a cualquier proyecto.
              </Card.Text>
              <Button variant="dark" href="https://pack2-byjclomu.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* CAFE FIVE VEGA */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074608/Portafolio%20Cejapop/Sites/Cafe_Five_Vega_ifnkss.png" />
            <Card.Body>
              <Card.Title>CAFE FIVE VEGA</Card.Title>
              <Card.Text>
              Promocional de café.
              </Card.Text>
              <Button variant="dark" href="https://fivevega-cafe.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 3 */}
        
         <CardGroup>
          
          {/* FIVE VEGA PANEL */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074615/Portafolio%20Cejapop/Sites/Five_Vega_1_wllioy.png" />
            <Card.Body>
              <Card.Title>FIVE VEGA PANEL</Card.Title>
              <Card.Text>
              Panel interactivo de Five Vega.
              </Card.Text>
              <Button variant="dark" href="https://fivevega1.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* FIVE VEGA MAQUETA PRESS KIT */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074612/Portafolio%20Cejapop/Sites/Five_Vega_Press_Kit_d024ea.png" />
            <Card.Body>
              <Card.Title>FIVE VEGA MAQUETA PRESS KIT</Card.Title>
              <Card.Text>
              Maqueta Press Kit Five Vega
              </Card.Text>
              <Button variant="dark" href="https://fivevega2.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 4 */}
        
         <CardGroup>
          
          {/* SAMPLE PACK */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074616/Portafolio%20Cejapop/Sites/Sample_Pack_gk22fa.png" />
            <Card.Body>
              <Card.Title>SAMPLE PACK</Card.Title>
              <Card.Text>
              Hero para librería de samples.
              </Card.Text>
              <Button variant="dark" href="https://sample-pack-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* LIQUID LOADER */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074605/Portafolio%20Cejapop/Sites/Liquid_Loader_woqcru.png" />
            <Card.Body>
              <Card.Title>LIQUID LOADER</Card.Title>
              <Card.Text>
              Loader implementado con JavaScript.
              </Card.Text>
              <Button variant="dark" href="https://liquid-loader-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 5 */}
        
         <CardGroup>
          
          {/* GHOST ANIMATION */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074606/Portafolio%20Cejapop/Sites/Ghost_Animation_fofa1m.png" />
            <Card.Body>
              <Card.Title>GHOST ANIMATION</Card.Title>
              <Card.Text>
              Animación implementada con JavaScript.
              </Card.Text>
              <Button variant="dark" href="https://ghost-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* TALENTO DE CASA 3D */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074613/Portafolio%20Cejapop/Sites/Talento_De_Casa_3D_ouqf0r.png" />
            <Card.Body>
              <Card.Title>TALENTO DE CASA 3D</Card.Title>
              <Card.Text>
              3D implementado con JavaScript.
              </Card.Text>
              <Button variant="dark" href="https://talento-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 6 */}
        
         <CardGroup>
          
          {/* COTIZADOR DE AUTOS */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074605/Portafolio%20Cejapop/Sites/Cotizador_de_autos_tu4wtx.png" />
            <Card.Body>
              <Card.Title>COTIZADOR DE AUTOS</Card.Title>
              <Card.Text>
              Cotizador de autos implementado con React.
              </Card.Text>
              <Button variant="dark" href="https://cotizador-autos-jclomu.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* BARMAN */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074603/Portafolio%20Cejapop/Sites/Buscador_de_bebidas_Barman_cjae8c.png"/>
            <Card.Body>
              <Card.Title>BARMAN</Card.Title>
              <Card.Text>
              Búsqueda de bebidas implementada con React.
              </Card.Text>
              <Button variant="dark" href="https://barman-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 7 */}
        
         <CardGroup>
          
          {/* ONE PAGE */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074616/Portafolio%20Cejapop/Sites/One_Page_Summit_Creative_Tim_a5nkxo.png" />
            <Card.Body>
              <Card.Title>ONE PAGE</Card.Title>
              <Card.Text>
              Paquete de elementos con librería de Bootstrap. Adaptable a cualquier proyecto.
              </Card.Text>
              <Button variant="dark" href="https://sssoon-onepage-byjclomy.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* PAPER KIT */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074608/Portafolio%20Cejapop/Sites/Paper_Kit_Creative_Tim_ghdotb.png"/>
            <Card.Body>
              <Card.Title>PAPER KIT</Card.Title>
              <Card.Text>
              Paquete de elementos con librería de Bootstrap. Adaptable a cualquier proyecto.
              </Card.Text>
              <Button variant="dark" href="https://paper-kit-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 8 */}
        
         <CardGroup>
          
          {/* COTIZADOR DE CRIPTOS */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074602/Portafolio%20Cejapop/Sites/Cotizador_de_Criptos_ydechh.png" />
            <Card.Body>
              <Card.Title>COTIZADOR DE CRIPTOS</Card.Title>
              <Card.Text>
              Cotizador de criptomonedas más importantes en tiempo real, implementado con React.
              </Card.Text>
              <Button variant="dark" href="https://cotizador-criptos-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* CONTROL DE PRESUPUESTO */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074602/Portafolio%20Cejapop/Sites/Control_de_presupuesto_zyenoe.png"/>
            <Card.Body>
              <Card.Title>CONTROL DE PRESUPUESTO</Card.Title>
              <Card.Text>
              Control de presupuesto utilizando LocalStorage con React.
              </Card.Text>
              <Button variant="dark" href="https://control-de-presupuesto-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 9 */}
        
         <CardGroup>
          
          {/* VETERINARIA */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074602/Portafolio%20Cejapop/Sites/Citas_Veterinaria_vqht9e.png" />
            <Card.Body>
              <Card.Title>VETERINARIA</Card.Title>
              <Card.Text>
              Control de consultas veterinarias utilizando LocalStorage con React.
              </Card.Text>
              <Button variant="dark" href="https://veterinaria-control-citas-react-jclom.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* COMPONENTE RATING */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074602/Portafolio%20Cejapop/Sites/Rating_Card_xbkwkh.png"/>
            <Card.Body>
              <Card.Title>CONTROL DE PRESUPUESTO</Card.Title>
              <Card.Text>
              Reto Frontend mentor HTML, CSS y JS.
              </Card.Text>
              <Button variant="dark" href="https://interactive-rating-component-byjclomu.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 10 */}
        
         <CardGroup>
          
          {/* PRODUCT CARD */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706075262/Portafolio%20Cejapop/Sites/product_card_aa9its.png" />
            <Card.Body>
              <Card.Title>PRODUCT CARD</Card.Title>
              <Card.Text>
              Reto Frontend mentor HTML, CSS y JS.
              </Card.Text>
              <Button variant="dark" href="https://product-preview-card-component-byjclo.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* RESULT CARD */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074604/Portafolio%20Cejapop/Sites/Result_Card_nqzln9.png"/>
            <Card.Body>
              <Card.Title>RESULT CARD</Card.Title>
              <Card.Text>
              Reto Frontend mentor HTML, CSS y JS.
              </Card.Text>
              <Button variant="dark" href="https://result-summary-byjclo.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 11 */}
        
         <CardGroup>
          
          {/* QR CARD */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074601/Portafolio%20Cejapop/Sites/Qr_Card_xit6x7.png" />
            <Card.Body>
              <Card.Title>QR CARD</Card.Title>
              <Card.Text>
              Reto Frontend mentor HTML, CSS y JS.
              </Card.Text>
              <Button variant="dark" href="https://qr-code-card-cj.netlify.app">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* MAQUETA FIVE VEGA */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074603/Portafolio%20Cejapop/Sites/Five_Vega_Maqueta_bni156.png"/>
            <Card.Body>
              <Card.Title>MAQUETA FIVE VEGA</Card.Title>
              <Card.Text>
              Maqueta con HTML del Press Kit digital de Five Vega.
              </Card.Text>
              <Button variant="dark" href="https://fivevega.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 12 */}
        
         <CardGroup>
          
          {/* FESTIVAL ROCK EDM */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074614/Portafolio%20Cejapop/Sites/Festival_Rock_EDm_cfnzds.png" />
            <Card.Body>
              <Card.Title>FESTIVAL ROCK EDM</Card.Title>
              <Card.Text>
              Reto Frontend mentor HTML, CSS y JS.
              </Card.Text>
              <Button variant="dark" href="https://festivalmusssic.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* BLOG CAFE */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074601/Portafolio%20Cejapop/Sites/Blog_Cafe_l4obzw.png"/>
            <Card.Body>
              <Card.Title>BLOG CAFE</Card.Title>
              <Card.Text>
              Blog de Cafetería implementado en HTML y Sass.
              </Card.Text>
              <Button variant="dark" href="https://blog-de-cafe-cj.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    

         {/* GRUPO 13 */}
        
         <CardGroup>
          
          {/* ZOMBIE STORE */}
          
          <Card 
            style={{ width: '18rem' }}
            className="m-2 center"
          > 
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706074602/Portafolio%20Cejapop/Sites/Zombie_Store_pl1w20.png" />
            <Card.Body>
              <Card.Title>ZOMBIE STORE</Card.Title>
              <Card.Text>
              Reto Frontend mentor HTML, CSS y JS.
              </Card.Text>
              <Button variant="dark" href="https://front-tiendaenlinea.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>
            
            {/* FREELANCE */}

          <Card 
            style={{ width: '18rem' }}
            className="m-2"
          >
            
            <Card.Img variant="top" src="https://res.cloudinary.com/dbtupr3la/image/upload/v1706075263/Portafolio%20Cejapop/Sites/Freelance_mtglpg.png"/>
            <Card.Body>
              <Card.Title>FREELANCE</Card.Title>
              <Card.Text>
              Blog de Cafetería implementado en HTML y Sass.
              </Card.Text>
              <Button variant="dark" href="https://p1-cj-frelancer.netlify.app/">Visitar</Button>
            </Card.Body>
          </Card>

        </CardGroup>    
      </Container>
    </>

     
  );
}

export default DevWeb;
