import React from 'react'
import './header.css'
import CTA from './CTA'
import dp from "../../assets/dp.jpg"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I am</h5>
        <h1>Arun Khanal</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
      <img  src={dp} alt='me'/>
    </div>
    <a href='#contact' className='scroll_down' >Scroll Down</a>

      </div>
    </header>
  )
}

export default Header