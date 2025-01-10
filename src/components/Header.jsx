import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='menu-icon' onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <a href="#home" className='nav-link'>Home</a>
          </li>
          <li className='nav-item'>
            <a href="#menu" className='nav-link'>Menu</a>
          </li>
          <li className='nav-item'>
            <a href="#about" className='nav-link'>About</a>
          </li>
          <li className='nav-item'>
            <a href="#contact" className='nav-link'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;