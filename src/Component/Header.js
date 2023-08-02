import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import Logo from '../Assets/images/logo.png';
import '../Assets/css/Header.css';
import {ResultContext} from '../Context/ResultContext';
import Searchbar from './Searchbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';


const Header = ({handleFaq, handleHowItWork}) => {
  const {pathname} = useLocation();
  const {setUserPrompt, generateImage} = useContext(ResultContext);
  const [showHeader, setShowHeader] = useState(false);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const onChangeValue = searchParams.get('search') || '';

  console.log('param', pathname)

  useEffect(() => {
    setUserPrompt(onChangeValue);
    searchParams.get(window.location.search)
    if(onChangeValue) {
      generateImage(onChangeValue)
    }
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 100;

    scrollPosition > threshold ? setShowHeader(true) : setShowHeader(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  }, [])

  

    return (
      <div>
        {
          pathname !== '/result' ? 
          <Navbar expand="lg" className={`Header ${showHeader && "stickyHeader"} ${pathname === "/" ? "is-Home" : ""}`}>
            <Container fluid className='w-100'>
              <div className='logo'>
                <Link to={'/'}><img src={Logo} alt='Dall-e Free' /></Link>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <NavBar handleFaq={handleFaq} handleHowItWork={handleHowItWork}  />    
              </Navbar.Collapse>
              <div className='account-avatar'>
                <Link>Z</Link>
              </div>
            </Container>
          </Navbar>
      :
        <div className='Header result-header px-md-4 px-3'>
          <div className='logo'>
            <Link to={'/'}>
              <img src={Logo} alt='Dall-e Free' />
            </Link>
          </div>
  
          <div className='result-searchbar'>
            <Searchbar />
          </div>
  
          {/* <NavBar/> */}
          <div className='account-avatar'>
            <Link>Z</Link>
          </div>
        </div>
        }
      </div>
    )
}

export default Header