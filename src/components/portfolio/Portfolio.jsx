import React from 'react';
import './Portfolio.css';
import textutils from '../../assests/textutils.png';
import portfoliopic from '../../assests/portfoliopic.jpg';
import dragon from '../../assests/dragon.jpg';
const projects = [
    {
        id: 1,
        image: portfoliopic,
        title: 'PERSONAL PORTFOLIO',
        url: 'https://roshroy.netlify.app',
        position: 'Front-End Project',
        date: 'JAN 2023',
        description: 'Developed a plugin for the Thunderbird email client to allow the support staff to log tickets to their database based on email content and color code incoming emails based on ticket status. Also migrated the company\'s legacy application from a Java-based Swing version to a web-based version using JavaScript, HTML, JSP\'s, CSS & jQuery.'
    },
    { 
        id: 2,
        image: portfoliopic,
        title: 'NEWSBOX',
        url: '/',
        position: 'Front-End Project',
        date: 'June 2021',
        description: 'Developed a plugin for the Thunderbird email client to allow the support staff to log tickets to their database based on email content and color code incoming emails based on ticket status. Also migrated the company\'s legacy application from a Java-based Swing version to a web-based version using JavaScript, HTML, JSP\'s, CSS & jQuery.'
    },

    { 
    id: 3,
    image: textutils,
    title: 'TEXTUTILS',
    url: 'https://textutilsbyakash.netlify.app/',
    position: 'Front-End Project',
    date: 'MAY 2022',
    description: 'Created a mobile app chatbot using React.js and Spring Boot to help business teams working with Ultra-High-Net-Worth clients in accessing asset and liability information on the go. Built the UI and custom quick chat functionality based on response data from the botnps conversation API.'
    },


{ 
    id: 4,
    image: dragon,
    title: 'DRAGON GAME',
    url: 'https://akashkumargolden.github.io/dragongame/',
    position: 'Pure HTML and JS Project',
    date: 'SEP 2021',
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
                        <a href={project.url}><img src={project.image} alt={project.title}/></a>
                    </div> 
                    <h3 >{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}<br/>
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