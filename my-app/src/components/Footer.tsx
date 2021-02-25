import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      This website is inspired and based on the exercises proposed in{' '}
      <a
        href='https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php'
        target='_blank'
        rel='noopener noreferrer'
      >
        w3resource
      </a>
      , I did it for my personal purpose of studying and practicing javascript.
    </footer>
  );
};

export default Footer;
