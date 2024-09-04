import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Arnab Dutta</a>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-menu-icon" onClick={handleMenuToggle}>
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};


