import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
<br />
      <div className='experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
          </div>

{/* Graphic Designing */}
        </div>
        <div className="experience__graphics">
        <h3>Graphics Designing</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>Adobe Photoshop</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>Adobe Illustrator</h4>
                  <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>Adobe Premiere Pro</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                  <h4>Canva</h4>
                  <small className='text-light'>Experienced</small>
              </div>

            </article>
            
          </div>


        </div>


        </div>
    </section>
  )
}

export default Experience