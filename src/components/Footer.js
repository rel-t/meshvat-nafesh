import React from 'react'
import './Footer.css'
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        {/* Left section */}
        <div className='left'>
          {/* Location */}
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>יפו 206</p>
              <p>ירושלים</p>
            </div>
          </div>

          {/* Phone */}
          <div className='phone'>
            <h4>
              <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              02-1234567
            </h4>
          </div>

          {/* Email */}
          <div className='email'>
            <h4>
              <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              info@gmail.com
            </h4>
          </div>
        </div>

        {/* Right section */}
        <div className='right'>
          <h4>אודות הארגון</h4>
          <p>
            בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה
            בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה
            בלה בלה בלה בלה בלה בלה
          </p>
          <div className='social'>
            <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaYoutube size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer