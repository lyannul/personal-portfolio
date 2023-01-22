import React from 'react';
import {BsLinkedin, BsGithub ,BsFillFileCodeFill} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/akashkumargolden/" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/akashkumargolden" target='_blank'><BsGithub/></a>
       <a href="https://leetcode.com/akashkumargolden1/" target='_blank'><BsFillFileCodeFill/></a>
    </div>
  );
}

export default Socials;