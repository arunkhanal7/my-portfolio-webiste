import React from 'react'
import './blogs.css'
import IMG1 from '../../assets/blog1.png'
import IMG2 from '../../assets/blog2.png'
import IMG3 from '../../assets/blog3.png'

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
          <h3>Best Mobile Phones Under Rs. 30000 in Nepal</h3>
          <div className="blog__item-cta">
          <a href="https://bestinmart.com/best-mobile-phones-under-rs-30000-in-nepal/" className='btn btn-primary button' target='_blank' rel='noreferrer'>Read Full</a>
          </div>
        </article>

        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Sony PS5(playstation) Price in Nepal 2023</h3>
          <div className="blog__item-cta">
          <a href="https://bestinmart.com/ps5-price-in-nepal/" className='btn btn-primary button' target='_blank' rel='noreferrer'>Read Full</a>
          </div>
        </article>

        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Poco X3/Poco X3 Pro Price in Nepal</h3>
          <div className="blog__item-cta">
          <a href="https://bestinmart.com/xiaomi-poco-x3-poco-x3-pro-price-in-nepal/" className='btn btn-primary button' target='_blank' rel='noreferrer'>Read Full</a>
          </div>
        </article>


      

      

      </div>


    </section>
  )
}
export default Blogs