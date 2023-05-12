import React from 'react';
import css from './MainButtonTwo-style.module.css';

const MainButtonTwo = ({text, link}) => {
    return (
        <button href={link} className={css.mainButtonTwo}>
            {text}
        </button>
    );
};

export default MainButtonTwo;