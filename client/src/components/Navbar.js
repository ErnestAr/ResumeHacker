import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';



const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };



function TheNavbar() {
    
    return (
        <Navbar>
            <Container >
                <Nav className="me-auto">
                {Auth.loggedIn() ? (
                    <div>
                        <Nav.Link className='navbar-link' href="/"><span>Home</span></Nav.Link>
                        <Nav.Link className='navbar-link' href={"/Dashboard"}><span>Dashboard</span></Nav.Link>
                        <Nav.Link className='navbar-link' href="/About"><span>About</span></Nav.Link>
                        <button className="btn btn-lg btn-light m-2" onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <Nav.Link className='navbar-link' href="/"><span>Home</span></Nav.Link>
                        <Nav.Link className='navbar-link' href="/LoginSignUp"><span>Dashboard</span></Nav.Link>
                        <Nav.Link className='navbar-link' href="/About"><span>About</span></Nav.Link>
                        <Nav.Link className='navbar-link' href="/LoginSignUp"><span>Login/Signup</span></Nav.Link>
                    </div>
                )}      
                </Nav>
            </Container>
        </Navbar>

    );
}

export default TheNavbar;