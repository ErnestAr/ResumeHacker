import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Link} from 'react-router-dom';
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
                <Nav className="me-auto d-flex justify-content-end" style={{width:'100vw'}}>
                {Auth.loggedIn() ? (

                    <div className='d-flex'>
                        <Link className='navbar-link mt-2' to="/"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Home</span></Link>
                        <Link className='navbar-link mt-2' to="/Dashboard"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Dashboard</span></Link>
                        <Link className='navbar-link mt-2' to="/About"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>About</span></Link>
                        <button className="btn btn-lg btn-primary m-2 navBtn" onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div className='d-flex flex-row'>
                        <Link className='navbar-link' to="/"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Home</span></Link>
                        <Link className='navbar-link' to="/LoginSignUp"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Dashboard</span></Link>
                        <Link className='navbar-link' to="/About"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>About</span></Link>
                        <Link className='navbar-link' to="/LoginSignUp"><span className='nav-text' style={{color:'#3A7CA5', fontSize:'1.5em'}}>Login/Signup</span></Link>
                    </div>
                )}      
                </Nav>
            </Container>
        </Navbar>

    );
}

export default TheNavbar;