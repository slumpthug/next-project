import React from 'react';
import css from './Footer-style.module.css';
import Image from 'next/image';
import logo from '../../public/header/logo.svg';
import label from '../../public/footer/label.svg';
import instagram from '../../public/footer/instagram.svg';
import telegram from '../../public/footer/telegram.svg';

const Footer = () => {
    return (
        <div id='1' className={css.footer}>
            <div className={css.container}>
                <div className={css.footer__info}>
                    <Image className={logo} src={logo} alt="companys logo" />
                    <p>INTEFRA - российская платформа, на которой объединены ведущие итальянские бренды одежды, обуви и аксессуаров.</p>
                    <span>INTEFRA.RU - c 2012 года - 100% оригинальные товары</span>
                </div>
                <div className={css.footer__links}>
                    <ul className={css.footer__menu}>
                        <li><a href="#">Обувь</a></li>
                        <li><a href="#">Джинсы и брюки</a></li>
                        <li><a href="#">Верхняя одежда</a></li>
                        <li><a href="#">Спортивные костюмы</a></li>
                        <li><a href="#">Пиджаки и костюмы</a></li>
                        <li><a href="#">Свитера, поло, джемперы</a></li>
                    </ul>
                    <ul className={css.footer__menu}>
                        <li><a href="#">Футболки и поло</a></li>
                        <li><a href="#">Сумки</a></li>
                        <li><a href="#">Ремни</a></li>
                        <li><a href="#">Аксессуары</a></li>
                        <li><a href="#">Бренды</a></li>
                    </ul>
                </div>
                <div className={css.footer__position}>
                    <div className={css.footer__address}>
                        <div>
                            <h6>Офис в России</h6>
                            <a href='https://go.2gis.com/gy5cq'>Москва, Кутузовский пр. 2 <br /> Санкт-Петербург, Большой проспект П.С. 13</a>
                        </div>
                        <Image className={css.label} src={label} alt="label" />
                    </div>
                    <div className={css.footer__address}>
                        <div>
                            <h6>Офис в Италии</h6>
                            <a href='https://go.2gis.com/gy5cq'>Milano, Via Manzoni 23</a>
                        </div>
                        <Image className={css.label} src={label} alt="label" />
                    </div>
                    <div className={css.footer__socials}>
                        <a href="https://www.instagram.com/">
                            <Image className={css.instagram} src={instagram} alt="instagram logo" />
                        </a>
                        <a href="https://web.telegram.org/k/">
                            <Image className={css.telegram} src={telegram} alt="telegram logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;