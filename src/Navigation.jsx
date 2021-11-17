import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';
import logo from "./logo.svg"

function Navigation({pages}) {
  const pageLinks = pages.map(
    page => <Nav.Link className="mx-auto" as={NavLink} to={page.path}>{page.name}</Nav.Link>
  );
  return (
    <>
    <Container>
      <Row className="justify-content-center">
        <img
          src={logo}
          width="48"
          height="48"
          className="align-top mt-1"
          alt="JITETB logo"
        />
      <p className="h6 text-center">JITETB</p>
      </Row>
    </Container>
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto">Menu</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {pageLinks}
            <Nav.Link className="mx-auto" href="https://forms.gle/Hvs7o597eUcurnhq8">Get Price</Nav.Link>
          </Nav>
          <Outlet />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;
