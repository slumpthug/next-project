import React from 'react';
import css from './MainButtonTwo-style.module.css';

const MainButtonTwo = ({text}) => {
    return (
        <button className={css.mainButtonTwo}>
            {text}
        </button>
    );
};

export default MainButtonTwo;