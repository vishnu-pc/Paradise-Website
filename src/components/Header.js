import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Header.css";

function Header() {
  return (
    <div className="navigation-bar-with-logo">
      {/* <br></br> */}
      <Navbar
        className="nav-header"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            id="nav-hover-name"
            href="/"
          >
            <img
              alt=""
              src= 'assets/images/paradise-logo-filler.png'
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="form-inline my-2 my-lg-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id="nav-hover" href="/">
                  Home
                </Nav.Link>
                <Nav.Link id="nav-hover" href="/products">
                  Products
                </Nav.Link>
                <Nav.Link id="nav-hover" href="/about">
                  About
                </Nav.Link>
                <Nav.Link id="nav-hover" href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
