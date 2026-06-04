import React from 'react';

function Navbar({ menuImage }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>Order</li>
        <li>Food</li>
        <li>Restaurant</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
        <li>
          <img src={menuImage} alt="menu" height="50px" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;