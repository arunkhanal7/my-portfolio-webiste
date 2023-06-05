import React from 'react'
import './about.css'
import ME from "../../assets/about.jpg"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>


        </div>
        <div className="about__content">
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae labore, 
            ab, molestias placeat magnam eligendi aut quasi officiis voluptate excepturi sequi nemo?
             Quas ex, nesciunt tempora perferendis officiis laborum sint! </p>
             <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About