import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
            <Nav.Link href="#features" active className='textnavb'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='textnavb'>Games</Nav.Link>
            <Nav.Link href="#deets" className='textnavb'>Shop</Nav.Link>
            <Nav.Link href="#memes" className='textnavb'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavbarApp




;