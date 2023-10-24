import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function NavbarComponents() {
  return (
    <Navbar expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home"><strong>Kasir</strong>  App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponents
