import React from 'react';
import './Header.css';
import Action from './Action';
import ME from '../../assests/me.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello, I'm</h5>
            <h1>Lucas Yannul</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <Action/>
            
            <Socials/>

            <div className="me">
                <img src={ME} alt="A head-shot of Lucas" />
            </div>

            <a className='scroll__down' href="#contact">Scroll Down</a>
        </div>
    </header>
  );
}

export default Header;