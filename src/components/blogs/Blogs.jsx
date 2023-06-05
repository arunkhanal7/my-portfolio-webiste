import React from 'react'
import './blogs.css'
import IMG1 from '../../assets/portfolio1.jpg'

export const Blogs = () => {
  return (
    <section id='blogs'>
        
      <h2>My Recent Blogs</h2>
      <br />
      <div className='container blog__container'>
        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a title of a blog.</h3>
          <div className="blog__item-cta">
          <a href="https://" className='btn btn-primary' target='_blank' rel='noreferrer'>Read Full</a>
          </div>
        </article>

        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a title of a blog.</h3>
          <div className="blog__item-cta">
          <a href="https://" className='btn btn-primary' target='_blank' rel='noreferrer'>Read Full</a>
          </div>
        </article>

        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a title of a blog.</h3>
          <div className="blog__item-cta">
          <a href="https://" className='btn btn-primary' target='_blank' rel='noreferrer'>Read Full</a>
          </div>
        </article>


      

      

      </div>


    </section>
  )
}
export default Blogs