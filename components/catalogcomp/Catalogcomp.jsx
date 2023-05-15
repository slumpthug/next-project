import React from 'react';
import css from './Catalogcomp-style.module.css';
import Image from 'next/image';
import boots from '../../public/kinds/boots.png';
import bag from '../../public/novelties/bag.jpg';
import MainCard from '../main-card/MainCard';

const Catalogcomp = ({title, desc, links, cardTitle}) => {
    return (
        <div className={css.catalog}>
            <div className={css.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className={css.catalog__links}>
                    <ul>
                        {links.map(link => {
                            return (
                                <li><a href="#">{link}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div className={css.catalog__wrapper_one}>
                    {cardTitle.map(card => {
                        return (
                            <>
                                <a href="#" className={css.catalog__card_one}>
                                        <Image src={boots} alt="boots" />
                                        <span>{card.text}</span>
                                </a>
                            </>
                        )
                    })}
                </div>
                <div className={css.catalog__wrapper_two}>
                    <MainCard img={bag} title='Saint Laurent' proprice='96 000 ₽' price='123 000 ₽'/>
                </div>
            </div>
        </div>
    );
};

export default Catalogcomp;