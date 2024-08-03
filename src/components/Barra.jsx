import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSpan = styled.span`
font-weight: bold;
`;


function Barra() {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container >
        <Link to="/">
          <Navbar.Brand>
            <Button variant="dark">
              Ceja<StyledSpan>POP</StyledSpan>
            </Button>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto expand-true ">
            <Link to="/music"><Button variant="light">Music</Button></Link>
            <Link to="/devweb"><Button variant="light">Web Dev</Button></Link>
            <Link to="/tools"><Button variant="light">Downloads</Button></Link>
            <Link to="/about"><Button variant="light">About me</Button></Link>
            <Link to="/contact"><Button variant="light">Contact</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;