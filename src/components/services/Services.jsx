import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <br />

      <div className='services__container' >
        <article className='service'>
          <div className='service__head'>
            <h3>Graphics Designing</h3>
          </div>
          <ul className='service__list'> 
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Logo Design</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Banner Design</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Visiting Card Design</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Social Media Post Design</p>
          </li>

          </ul>
        </article>
        {/* End of UI UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'> 
          <li>
            <BiCheck className="service__list-icon"/>
            <p>School/Colege Websites</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Consultancy Websites</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Website Redesigning</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Personal Websites</p>
          </li>

          </ul>
        </article>
        {/* endof web development */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Writer</h3>
          </div>
          <ul className='service__list'> 
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Technical Blog</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Sports Report</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Personal Blogs</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Story Writing</p>
          </li>

          </ul>
        </article>
        {/* end of content creation */}
      </div>


    </section>
  )
}

export default Services