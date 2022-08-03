import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Icono from './st.png'
import './NavbarApp.css';

function NavbarApp() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="dark" className='NavbarColor'>
      <Container>
      <img src={Icono} alt="Icono" className='logo' />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-auto'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' active className='nav-link textnavb'>Home</Link>
            <Link to="/Cards" className='nav-link textnavb'>Games</Link>
            <Nav.Link to="#deets" className='textnavb'>Shop</Nav.Link>
            <Nav.Link href='Text' className='textnavb'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavbarApp




;