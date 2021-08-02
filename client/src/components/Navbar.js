import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import Auth from '../utils/auth';


const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


function theNavbar() {
    console.log(Auth.loggedIn());
    return (

        <Navbar>
            <Container >
                <Nav className="me-auto d-flex justify-content-end" style={{width:'100vw'}}>
                {Auth.loggedIn() ? (
                    <div className='d-flex'>
                        <Nav.Link className='navbar-link mt-2' href="/"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Home</span></Nav.Link>
                        <Nav.Link className='navbar-link mt-2' href="/Dashboard"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Dashboard</span></Nav.Link>
                        <Nav.Link className='navbar-link mt-2' href="/About"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>About</span></Nav.Link>
                        <button className="btn btn-lg btn-primary m-2 navBtn" onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div className='d-flex flex-row'>
                        <Nav.Link className='navbar-link' href="/"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Home</span></Nav.Link>
                        <Nav.Link className='navbar-link' href="/LoginSignUp"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Dashboard</span></Nav.Link>
                        <Nav.Link className='navbar-link' href="/About"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>About</span></Nav.Link>
                        <Nav.Link className='navbar-link' href="/LoginSignUp"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Login/Signup</span></Nav.Link>
                    </div>
                )}      
                </Nav>
            </Container>
        </Navbar>

    );
}

export default theNavbar;