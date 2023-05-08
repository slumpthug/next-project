import React from 'react';
import css from './BottomHeader-style.module.css';
import Image from 'next/image';
import arrow from '../../public/bottom-header/arrow-right.svg';

const BottomHeader = () => {
    return (
        <div className={css.bottomHeader}>
            <div className={css.container}>
                <a href="#">КОРЗИНА</a>
                <Image src={arrow} alt="arrow" />
                <a href="#">ОФОРМЛЕНИЕ</a>
                <Image src={arrow} alt="arrow" />
                <a href="#">ЗАВЕРШЕНИЕ</a>
            </div>
        </div>
    );
};

export default BottomHeader;