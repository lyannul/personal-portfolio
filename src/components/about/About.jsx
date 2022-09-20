import React from 'react';
import './About.css';
import ME from '../../assests/me.png';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="A headshot of Lucas"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiMedal className='about__icon'/>
                        <h5>Experience</h5>
                        <small>2 Summer SWE Internhips</small>
                    </article>
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>Villanova University <br/> CpE and CS</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Travelling, Lacrosse, Basketball & Coding</small>
                    </article>
                </div>
                <p>
                    I am a senior Computer Engineering major and Computer Science 
                    minor at Villanova! I am currently pursuing a career as a Software
                    Engineer. I have a strong passion for both front-end
                    and back-end development. I love to learn and always am trying 
                    to experiment with new technologies!
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  );
}

export default About;