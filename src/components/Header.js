import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <header>
      <div className="container-fluid">
        <Navbar collapseOnSelect expand="lg" className="menu-wrapper">
          <Navbar.Brand href="#home" className="siteName">
            Haze.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="rightMenu">
            <Nav className="">
              <Nav.Link href="#deets" className="linkMenu">
                Help Center
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="linkMenu">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
