import React from 'react';
import Resume from '../../assests/Lucas_Yannul_Resume.pdf';

const Action = () => {
  return (
    <div className='action'>
        <a className='btn' href={Resume} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Contact me!</a>
    </div>
  )
}

export default Action;