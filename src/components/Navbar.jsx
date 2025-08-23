import { Navbar, Nav, Container } from "react-bootstrap";

const Navbarr = () => {
  return (
    <Navbar
      bg="primary-subtle"
      variant="dark"
      expand="lg"
      className="mb-3 shadow"
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-3">
          Task Creator
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios" disabled>Servicios</Nav.Link>
            <Nav.Link href="#nosotros" disabled>Nosotros</Nav.Link>
            <Nav.Link href="#contacto" disabled>Contacto</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#login" disabled>Iniciar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
