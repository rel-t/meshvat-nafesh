import './Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      {/* Logo */}
      <Link to={'/'}>
        <h1>משיבת נפש</h1>
      </Link>

      {/* Nav Links */}
      <ul className='nav-menu'>
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
    </div>
  );
};

export default Navbar;
