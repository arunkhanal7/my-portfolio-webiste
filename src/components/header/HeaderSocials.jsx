import React from 'react'
import { FaLinkedin} from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/arun-khanal-2804a6239/' target='_blank' rel="noreferrer" > <FaLinkedin/> </a>
        <a href="https://github.com/arunkhanal7" target='_blank' rel="noreferrer" > <BsGithub/> </a>
        <a href='https://www.facebook.com/cristiano.khanal' target='_blank' rel="noreferrer" > <BsFacebook/> </a>
    </div>
  )
}

export default HeaderSocials