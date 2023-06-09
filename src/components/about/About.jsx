import React from "react";
import "./about.css";
import ME from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <p>
          
            Welcome to my portfolio website! I'm thrilled to have this
            opportunity to share my journey as a web developer and showcase the
            projects I've worked on. My name is Arun Khanal, and I'm an
            enthusiastic web developer with a deep passion for creating
            exceptional digital experiences.

            If you have any recommendation for me feel free to contact me .
            Happy Coding...
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk 
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
