import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" className="navbar">
            <Container className='navbarContainer'>
                <Navbar.Brand as={Link} to="/">ZoneSport</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
