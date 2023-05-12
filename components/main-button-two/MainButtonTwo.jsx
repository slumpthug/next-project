import React from 'react';
import css from './MainButtonTwo-style.module.css';

const MainButtonTwo = ({text, link}) => {
    return (
        <button type='submit'>   <a href={link}  className={css.mainButtonTwo}>
            {text}
        </a></button>
     
    );
};

export default MainButtonTwo;