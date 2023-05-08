import React from 'react';
import css from './Header-style.module.css';
import Image from 'next/image';
import burgerMenu from  '../../public/header/burger.svg';
import logo from  '../../public/header/logo.svg';
import box from  '../../public/header/box.svg';
import basket from  '../../public/header/basket.svg';

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.container}>
                <a className={css.burgerMenu_link} href="#">
                    <Image className={css.burgerMenu} src={burgerMenu} alt="burger menu" />
                </a>
                <a className={css.logo_link} href='#'>
                    <Image className={css.logo} src={logo} alt="companys logo" />
                </a>
                <input placeholder='Поиск по продукции' className={css.search}></input>
                <div className={css.links__container}>
                    <a className={css.user_link} href='#'>
                        <Image className={css.box} src={box} alt="box" />
                        <span>Доставка</span>
                    </a>
                    <a className={css.user_link} href='#'>
                        <Image className={css.basket} src={basket} alt="basket" />
                        <span>Корзина</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;