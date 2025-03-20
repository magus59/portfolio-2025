import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/FooterComponent.css";


const FooterComponent = () => {
  return (
    <footer className="footer">
    <div className="flex flex-col items-center space-y-2">
    
      <div className="conta">
        <a href="tel:+123456789" className="cont">
          <FaPhone /> <span className='span'>07 81 01 46 77</span>
        </a>
        <a href="mailto:jade.aubrey@email.com" className="cont">
          <FaEnvelope /> <span className='span'>yahia.mabchour@email.com</span>
        </a>
        <span className="cont">
          <FaMapMarkerAlt /> <span className='span'>Lille, France</span>
        </span>
      </div>
      <div className="social-media">
        <a href="https://linkedin.com/in/jadeaubrey" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 logo1">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/jadeaubrey" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 logo1">
          <FaGithub size={24} />
        </a>
        <a href="https://instagram.com/jadeaubrey" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 logo1">
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="name"> <p>&copy; 2025 Yahia Mabchour. Tous droits réservés.</p></div>
    </div>
  </footer>
  )
}

export default FooterComponent