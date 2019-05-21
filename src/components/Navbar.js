import React from 'react';
import logo from '../images/ironhack-logo.svg';
import menutop from '../images/menu-top.svg';

function Navbar() {
  return (
    <div class="main-nav">
      <img src={logo} className="logo" alt="logo" />
      <img src={menutop} className="menutop" alt="menu" />
    </div>
  )
}

export default Navbar;

