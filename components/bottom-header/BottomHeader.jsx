import React from 'react';
import css from './BottomHeader-style.module.css';
import Image from 'next/image';
import arrow from '../../public/bottom-header/arrow-right.svg';

const BottomHeader = ({ text }) => {
    return (
        <div className={css.bottomHeader}>
            <div className={css.container}>
                <a href="/">на главную</a>
                <Image src={arrow} alt="arrow" />
                <span>{text}</span>
            </div>
        </div>
    );
};

export default BottomHeader;