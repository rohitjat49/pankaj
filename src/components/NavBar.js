// export default NavBar;

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo3 from '../assets/img/logo3.png';
// import logo from '../assets/img/logo.png';
// import logo from '../assets/img/logo.svg';
// import pankaj from '../assets/img/pankaj.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
      <Navbar.Brand href="home">
          <img src={logo3} alt="Logo" />
        </Navbar.Brand>
        {/* <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand> */}
        {/* <NavBar.Brand href="/">
        <img src={pankaj} alt="Pankaj" />
        </NavBar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pankaj-meena83?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon1} alt="" key="icon1" /></a>
              <a href="https://www.instagram.com/__pankaj__meena__?igsh=MjNkdXI3NXcycmFv&utm_source=qr"><img src={navIcon2} alt="" key="icon2" /></a>
              <a href="https://www.instagram.com/__pankaj__meena__?igsh=MjNkdXI3NXcycmFv&utm_source=qr"><img src={navIcon3} alt="" key="icon3" /></a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
