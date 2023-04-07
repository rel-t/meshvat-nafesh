import React from 'react';
import './HeroImg.css';

import buildingImg from '../assets/building.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      {/* Background image */}
      <div className="mask">
        <img className="intro-img" src={buildingImg} alt="introImg" />
      </div>

      {/* Content */}
      <div className="content">
        <p>איזהשהו טקסט בעברית</p>
        <h1>כותרת בעברית.</h1>
        <div>
          <Link to="/donation" className="btn">
            כפתור 1
          </Link>
          <Link to="/contact" className="btn btn-light">
            כפתור 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
