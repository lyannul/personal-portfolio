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
                    <img src={ME} alt="A headshot of Akash"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiMedal className='about__icon'/>
                        <h5>Training </h5>
                        <small>INDIAN RAILWAYS <br/> In department of Signal & Tele-communication<br/>June'22-July'22</small>
                    </article>
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>Bhagalpur College Of Engineering<br/> ECE | 2019-23</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Traveling,Badminton & Coding</small>
                    </article>
                </div>
                <p>
                I am a final year Grad Student at Bhagalpur College Of Engineering. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, C++ during my bachelor's.I am passionate about developing complex applications that solve real-world problems impacting millions of users
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                 
            </div>
        </div>
    </section>
  );
}

export default About;