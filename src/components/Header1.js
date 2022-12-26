import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './style.css'
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom'

function Header1() {
  return (
    <>
      <Navbar className='text-center justify-content-center' style={{height:'30px',background:'red',fontStyle: 'system-ui',    fontWeight: 'bold'}} variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Personal</Navbar.Brand>
          <Nav.Link className='text-light' href="#home">Business</Nav.Link> */}
          <div className='header_1 d-flex'>
            <Link className='header_mouse' style={{paddingRight:'34px'}} to="/">Personal</Link>
            <a className='header_mouse' href="#pricing">Business</a>
          </div>
          {/* <p style={{marginTop:'16px',fontSize:'15px'}}>Have a phone you love ? Get upto $500 when you <a className='text-decoration-none text-light' href="#">bring your phone</a></p> */}
          <div className='header1 d-flex'>
            <a className='header_mouse' style={{paddingRight:'30px'}} href="#features">Stores</a>
            <a className='header_mouse' href="#pricing">Espanol</a>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header1