import React from 'react';
import './Portfolio.css';
import JPMC from '../../assests/jpmc.jpeg';
import ICANON from '../../assests/icanon.jpeg';

const projects = [
{ 
    id: 1,
    image: JPMC,
    title: 'JPMorgan Chase & Co.',
    position: 'Software Engineering Intern',
    date: 'Jun 2022 - Aug 2022',
    description: 'Created a mobile app chatbot using React.js and Spring Boot to help business teams working with Ultra-High-Net-Worth clients in accessing asset and liability information on the go. Built the UI and custom quick chat functionality based on response data from the bot\’s conversation API.'
},
{ 
    id: 2,
    image: ICANON,
    title: 'ICANON Associates',
    position: 'Software Engineering Intern',
    date: 'Jun 2021 - Aug 2021',
    description: 'Developed a plugin for the Thunderbird email client to allow the support staff to log tickets to their database based on email content and color code incoming emails based on ticket status. Also migrated the company\'s legacy application from a Java-based Swing version to a web-based version using JavaScript, HTML, JSP\'s, CSS & jQuery.'
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;