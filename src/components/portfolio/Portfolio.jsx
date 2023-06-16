import React from 'react'
import './portfolio.css'
import IMG3 from '../../assets/stopwatch.png'
import IMG4 from '../../assets/todo.png'
import IMG5 from '../../assets/weather.png'


const Portfolio = () => {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <br />

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" height={250} />
          </div>
          <h3>Todo-List App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/arunkhanal7/To-do-list" className='btn'>Github</a>
          <a href="https://playful-pithivier-a2d3f0.netlify.app" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Weather-App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/arunkhanal7/WeatherApp" className='btn'>Github</a>
          <a href="https://euphonious-kitsune-b27b71.netlify.app" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" height={250} />
          </div>
          <h3>Stop-Watch</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/arunkhanal7/web-stop-watch-project" className='btn'>Github</a>
          <a href="https://starlit-bombolone-b99e62.netlify.app" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

      

      </div>
       
    </section>
  )
}

export default Portfolio