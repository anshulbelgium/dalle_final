import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({handleFaq, handleHowItWork}) => {
  return (
    <Nav className="m-auto">
      <Link className='nav-link text-dark' to="/">Home</Link>
      <Link className='nav-link text-dark' to="/about-us">About Us</Link>
      {/* <Link onClick={handleHowItWork}>How it Work</Link>
      <Link onClick={handleFaq}>FAQ</Link> */}
      <Link className='nav-link text-dark' to="/contact-us">Contact Us</Link>
    </Nav>
        
  )
}

export default NavBar;