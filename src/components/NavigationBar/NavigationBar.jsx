import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
      <Navbar.Brand as={Link} to="/">
        Yugioh Busquedas
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/use-effect">
          Use State
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Use Effect
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
