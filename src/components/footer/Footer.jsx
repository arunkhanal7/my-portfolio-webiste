import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Arun Khanal</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/cristiano.khanal"> <BsFacebook/> </a>
        <a href="https://www.instagram.com/khanal_arun7/"> <BsInstagram/> </a>
        <a href="https://www.linkedin.com/in/arun-khanal-2804a6239/"> <BsLinkedin/> </a>
      </div>

      <div className="footer__copyright">
        <small>
        &copy; Arun Khanal. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer