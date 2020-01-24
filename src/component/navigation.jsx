import React from "react";
import {Navbar, Nav, NavDropdown }from "react-bootstrap";
import './style/navigation.css'

class Navigation extends React.Component {
  render() {
    return (
      <Navbar className="navigation" expand="lg" position="sticky">
        <Navbar.Brand href="#home">German García S.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Galery</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
