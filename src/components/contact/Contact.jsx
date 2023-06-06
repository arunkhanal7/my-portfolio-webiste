import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from "emailjs-com"



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ode8qvk', 'template_lsm7yej', form.current, 'nQlSsOy97j0vVSXJo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <br />

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon'/>

            <h4>Email</h4>
            <h5>contactme@gmail.com</h5>
            <a href="mailto:arunkhanal2013@gmail.com" target='_blank' rel="noreferrer">Send a message</a>

          </article>

          <article className="contact__option">
            
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Arun Khanal</h5>
            <a href="https://m.me/cristiano.khanal" target='_blank' rel="noreferrer">Send a message</a>

          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>

            <h4>Whats APP</h4>
            <h5>+9771234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+9779860240445" target='_blank' rel="noreferrer">Send a message</a>

          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email'placeholder='Your Email'required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact