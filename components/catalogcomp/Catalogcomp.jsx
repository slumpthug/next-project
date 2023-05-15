import React from 'react';
import css from './Catalogcomp-style.module.css';
import Image from 'next/image';
import boots from '../../public/kinds/boots.png';
import bag from '../../public/novelties/bag.jpg';
import MainCard from '../main-card/MainCard';

const Catalogcomp = () => {
    return (
        <div className={css.catalog}>
            <div className={css.container}>
                <h1>ОБУВЬ</h1>
                <p>Мы собрали шикарную коллекцию итальянских марок обуви от самых ведущих производителей: </p>
                <div className={css.catalog__links}>
                    <ul>
                        <li><a href="#">Loro Piana</a></li>
                        <li><a href="#">Kiton</a></li>
                        <li><a href="#">Brunello Cucinelli</a></li>
                        <li><a href="#">Santoni</a></li>
                        <li><a href="#">Moreschi</a></li>
                        <li><a href="#">Barrett</a></li>
                        <li><a href="#">Testoni</a></li>
                        <li><a href="#">Artigiani</a></li>
                        <li><a href="#">Moreschi</a></li>
                        <li><a href="#">Zegna</a></li>
                    </ul>
                </div>
                <div className={css.catalog__wrapper_one}>
                    <a href="#" className={css.catalog__card_one}>
                            <Image src={boots} alt="boots" />
                            <span>ботинки</span>
                    </a>
                    <a href="#" className={css.catalog__card_one}>
                            <Image src={boots} alt="boots" />
                            <span>ботинки</span>
                    </a>
                    <a href="#" className={css.catalog__card_one}>
                            <Image src={boots} alt="boots" />
                            <span>ботинки</span>
                    </a>
                    <a href="#" className={css.catalog__card_one}>
                            <Image src={boots} alt="boots" />
                            <span>ботинки</span>
                    </a>
                    <a href="#" className={css.catalog__card_one}>
                            <Image src={boots} alt="boots" />
                            <span>ботинки</span>
                    </a>
                    <a href="#" className={css.catalog__card_one}>
                            <Image src={boots} alt="boots" />
                            <span>ботинки</span>
                    </a>
                </div>
                <div className={css.catalog__wrapper_two}>
                    <MainCard img={bag} title='Saint Laurent' proprice='123 000 ₽' price='96 000 ₽'/>
                </div>
            </div>
        </div>
    );
};

export default Catalogcomp;