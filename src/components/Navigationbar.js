import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigationbar.css";
import Cookie from "../assets/cookielogo.png";

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Cookie} alt="cookie" id="cookie" href="/" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/gallery" id="linktext">
              Gallery
            </Nav.Link>
            <Nav.Link href="/orderpage" id="linktext">
              Order Now
            </Nav.Link>
            <Nav.Link href="/login" id="linktext">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup" id="linktext">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
