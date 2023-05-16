import React from 'react';
import css from './Brands-style.module.css';
import MainButton from '../main-button/MainButton';
import Image from 'next/image';
import logo from '../../public/brands/logo.svg';

const Brands = () => {
    return (
        <div className={css.brands}>
            <div className={css.container}>
                <h1>ТОП-БРЕНДЫ</h1>
                <div className={css.brands_wrapper}>
                    <a href='#'>
                        <Image className={css.logo} src={logo} alt="" />
                    </a>
                    <a href='#'>
                        <Image className={css.logo} src={logo} alt="" />
                    </a>
                    <a href='#'>
                        <Image className={css.logo} src={logo} alt="" />
                    </a>
                    <a href='#'>
                        <Image className={css.logo} src={logo} alt="" />
                    </a>
                    <a href='#'>
                        <Image className={css.logo} src={logo} alt="" />
                    </a>
                    <a href='#'>
                        <Image className={css.logo} src={logo} alt="" />
                    </a>
                </div>
                <MainButton text="все бренды" />
            </div>
        </div>
    );
};

export default Brands;