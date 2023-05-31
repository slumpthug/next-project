import React from 'react';
import css from './MainButton-style.module.css';

const MainButton = ({ text, link }) => {
    return (
        <a href={link} type='submit' className={css.mainButton}>
            <span>{text}</span>
        </a>
    );
};

export default MainButton;