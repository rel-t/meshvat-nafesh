import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="אודות" text="טקסט פסקה אודות"/>
      <Footer />
    </div>
  );
};

export default About;
