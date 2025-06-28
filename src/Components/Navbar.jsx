import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainNav = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Analog_Clock">Analog Clock</Nav.Link>
            <Nav.Link href="/Auto_Complete">Auto Complete</Nav.Link>
            <Nav.Link href="/Data_Table">Data Table</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNav;
