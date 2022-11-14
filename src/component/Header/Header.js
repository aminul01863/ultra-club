import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ULTRA-ACTIVE-CLUB</Navbar.Brand>
          <Nav className="dark float-end header-name">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Details</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
