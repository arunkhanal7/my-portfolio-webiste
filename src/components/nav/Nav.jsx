import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
    <li> <a href='#home' >Home</a> </li>
    <li>  <a href='#about' > About </a> </li>
    <li>  <a href='#experience' > Experience </a> </li>
    <li>  <a href='#services' > Services </a> </li>
    <li>  <a href='#projects' > Projects </a> </li>
    <li>  <a href='#blogs' >  Blogs</a> </li>
    <li>  <a href='#contact'>Contact</a> </li>
    <div class="search">
                    <input type="text" name="search" id="search" placeholder="Search"/>
                </div>
      </ul>
    </nav>
  )
}

export default Nav