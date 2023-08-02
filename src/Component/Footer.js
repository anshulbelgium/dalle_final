import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../Assets/images/logo.png';
import { Link } from 'react-router-dom';
import {BsInstagram, BsTwitter} from 'react-icons/bs';
import {FaPinterestP, FaFacebookF} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
        <Container fluid>
            <Row className='align-items-center'>
                <Col xl={3} lg={3}>
                    <div className='Logo text-lg-start text-center mb-lg-0 mb-3'>
                        <Link to={'/'}><img src={Logo} alt='' /> </Link>
                    </div>
                </Col>
                <Col xl={6} lg={6}>
                    <ul className='list-unstyled d-flex justify-content-center m-lg-0 mb-4 flex-md-unwrap flex-wrap'>
                        <li><Link to = "/terms-and-condition">Terms & Conditions</Link></li>
                        <li><Link to = "/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to = "/about-us">About Us</Link></li>
                        <li><Link to = "/contact-us">Contact Us</Link></li>
                    </ul>
                </Col>
                <Col xl={3} lg={3}>
                    <ul className='social-media list-unstyled d-flex justify-content-lg-end justify-content-center m-0'>
                        <li><a href="https://www.facebook.com/people/Dall-E-Free/100095360649990/" target='_blank'><FaFacebookF /></a></li>
                        <li><a href="#" target='_blank'><BsTwitter /></a></li>
                        <li><a href="#" target='_blank'><BsInstagram /></a></li>
                        <li><a href="https://in.pinterest.com/dallefree0/" target='_blank'><FaPinterestP /></a></li>
                    </ul>
                </Col>
            </Row>

            <div className='copyright'>
                <p className='m-0'>© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer;