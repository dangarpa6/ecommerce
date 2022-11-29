import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <header className='header'>
    { /*  <NavLink to='/'>
        <h1 className='header__logo'>e-commerce</h1>
      </NavLink> {/*Diferencia NavLink con link es que se le puede pasar funcion callback*
     <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item"><NavLink  className={({isActive})=> isActive ? 'active-link': ''} to='/login' >Login</NavLink></li>
          <li className="header__item"><NavLink  className={({isActive})=> isActive ? 'active-link': ''} to='/purchases' >Purchases</NavLink></li>
          <li className="header__item"><h2 className='header__link'>Cart</h2> </li>
        </ul>
  </nav>*/}
      <Navbar bg="primary" expand="lg">
      <Container >
        <Navbar.Brand as={NavLink} to='/' style={{color:'white'}}>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/login' style={{color:'white'}}>Login</Nav.Link>
            <Nav.Link as={NavLink} to='/purchases' style={{color:'white'}}>Purchases</Nav.Link>
            <Nav.Link  style={{color:'white'}}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header