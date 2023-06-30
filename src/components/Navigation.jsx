import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/admin" className="nav-link">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand as={Link} to="/" className="navbar-brand">ZoneSport</Navbar.Brand>
      <Navbar.Text className="navbar-text">Welcome, User!</Navbar.Text>
    </Navbar>
  );
};

export default Navigation;
