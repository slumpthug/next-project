import React from 'react';
import css from './MainButtonTwo-style.module.css';

const MainButtonTwo = ({text, link}) => {
    return (
        <a href={link} className={css.mainButtonTwo}>
            {text}
        </a>
    );
};

export default MainButtonTwo;