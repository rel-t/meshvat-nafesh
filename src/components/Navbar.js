import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="header">
      {/* Logo */}
      <Link to={'/'}>
        <h1>משיבת נפש</h1>
      </Link>

      {/* Nav Links */}
      <ul className="nav-menu">
        <li>
          <Link to={'/about'}>אודות</Link>
        </li>
        <li>
          <Link to={'/contact'}>צור קשר</Link>
        </li>
        <li>
          <Link to={'/donation'}>תרום עכשיו</Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div className="hamburger">
        <FaBars size={20} style={{ color: '#fff' }} />
      </div>
    </div>
  );
};

export default Navbar;
