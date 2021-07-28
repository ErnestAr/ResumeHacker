import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


function theNavbar() {
    return (
        <Navbar>
            <Container >
                <Nav className="me-auto">
                    <Nav.Link className='navbar-link' href="/"><span>Home</span></Nav.Link>
                    <Nav.Link className='navbar-link' href="/Dashboard"><span>Dashboard</span></Nav.Link>
                    <Nav.Link className='navbar-link' href="/About"><span>About</span></Nav.Link>
                    <Nav.Link className='navbar-link' href="/LoginSignUp"><span>Login/Signup</span></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default theNavbar;