import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../assets/images/paradise-transparent.png";
import "./Header.css";

function Header2() {
  return (
    <div className="navigation-bar-with-logo">
      <Navbar
        className="nav-header-op2"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            id="nav-hover-name"
            href="/"
          >
            {/* <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "} */}
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

export default Header2;