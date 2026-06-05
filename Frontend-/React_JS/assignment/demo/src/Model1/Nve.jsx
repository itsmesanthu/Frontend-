import React from 'react';

function Navbar({ menuImage }) {
  const navLinks = [
    'Home',
    'Order',
    'Food',
    'Restaurant',
    'Testimonials',
    'Contact Us',
  ];

  return (
    <nav
      style={{
        background: '#f66d6d',
        padding: '18px 60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li key={index} style={{ display: 'inline-block', margin: '0 20px' }}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;