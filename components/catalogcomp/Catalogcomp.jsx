import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCards } from '@/redux/basketSlice';
import css from './Catalogcomp-style.module.css';
import Image from 'next/image';
import boots from '../../public/kinds/boots.png';
import bag from '../../public/novelties/bag.jpg';
import MainCard from '../main-card/MainCard';
import Privilege from '../privilege/Privilege';

const Catalogcomp = () => {
    let [catalog, setCatalog] = useState(1)

    const  catalogs = [
        {
            id: 1,
            title: 'Обувь',
        },
        {
            id: 2,
            title: 'Верхняя одежда',
        },
    ]

    const cards = [
        {
            id: 1,
            text: "loh"
        },
        {
            id: 1,
            text: "lohd"
        },
        {
            id: 1,
            text: "lohkj"
        },
        {
            id: 1,
            text: "lohk"
        },
        {
            id: 1,
            text: "loho"
        },
        {
            id: 1,
            text: "lohoo"
        },
        {
            id: 2,
            text: "sanjar loh"
        },
        {
            id: 2,
            text: "sanjar loh"
        },
        {
            id: 2,
            text: "sanjar loh"
        },
        {
            id: 2,
            text: "sanjar loh"
        },
        {
            id: 2,
            text: "sanjar loh"
        },
        {
            id: 2,
            text: "sanjar loh"
        },
    ]

    const cardsSelected = useSelector(selectCards);

    return (
        <div className={css.catalog}>
            <div className={css.container}>
                <h1>Каталог</h1>
                <p>Только лучшие вещи по низким ценам</p>
                <div className={css.catalog__links}>
                    <ul>
                        {catalogs.map(item => {
                            return (
                                <>
                                    <li><a onClick={() => setCatalog(item.id)}>{item.title}</a></li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div className={css.catalog__wrapper_one}>
                    {cards.filter(item => item.id == catalog).map(item => {
                        return (
                            <>
                                <a href="#" className={css.catalog__card_one}>
                                        <Image src={boots} alt="boots" />
                                        <span>{item.text}</span>
                                </a>
                            </>
                        )
                    })}
                </div>
                <div className={css.catalog__wrapper_two}>
                    {cardsSelected.filter(item => item.cat == catalog).map(item => {
                        return (
                            <>
                                <MainCard img={bag} title={item.title} proprice={item.proprice} price={item.price}/>
                            </>
                        )
                    })}
                </div>
                <Privilege/>
            </div>
        </div>
    );
};

export default Catalogcomp;