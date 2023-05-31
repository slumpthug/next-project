import React from 'react';
import css from './MainButtonTwo-style.module.css';

const MainButtonTwo = ({ text, link, ...props }) => {
  return (
    <button type='submit' {...props}>
      <a href={link} className={css.mainButtonTwo}>
        {text}
      </a>
    </button>

  );
};

export default MainButtonTwo;