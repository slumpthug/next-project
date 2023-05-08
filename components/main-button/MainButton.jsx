import React from 'react';
import css from './MainButton-style.module.css';

const MainButton = ({text}) => {
    return (
        <button className={css.mainButton}>
            <span>{text}</span>
        </button>
    );
};

export default MainButton;