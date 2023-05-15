import React from 'react';
import css from './MainCard-style.module.css';
import Image from 'next/image';

const MainCard = ({img, title, price, proprice}) => {
    return (
        <a href='/product' className={css.main__card}>
            <Image className={css.img} src={img} alt="bag" />
            <h5>{title}</h5>
            <div>
                <span>{proprice}</span>
                <span>{price}</span>
            </div>
        </a>
    );
};

export default MainCard;