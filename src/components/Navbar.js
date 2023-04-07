import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      {/* Logo */}
      <Link to={'/'}>
        <h1>משיבת נפש</h1>
      </Link>

      {/* Nav Links */}
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
