import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Offcanvas } from 'react-bootstrap';
import Cart from './Cart';




const Header = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Navbar bg="primary" expand="lg">
      <Container >
        <Navbar.Brand as={NavLink} to='/' style={{color:'white'}}>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/login' style={{color:'white'}}>Login</Nav.Link>
            <Nav.Link as={NavLink} to='/purchases' style={{color:'white'}}>Purchases</Nav.Link>
            <Nav.Link onClick={handleShow} style={{color:'white'}}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<Cart show={show} handleClose={handleClose}/>
      </>
  
  )
}

export default Header