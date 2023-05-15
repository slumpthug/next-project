import React, { useState } from 'react';
import css from './Assemblage-style.module.css';
import Privilege from '../privilege/Privilege';
import CollectionCard from '../collection-card/CollectionCard';
import man from '../../public/collection/man.jpg';

const Assemblagecomp = () => {
    let [category, setCategory] = useState('')

    const card = [
        {
            id: 1,
            text: 'Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni', 
            cat: 1,
        },
        {
            id: 2,
            text: 'Пуховый жилет Kiton, джинсы Jacob Cohen, футболка Fedeli, кроссовки Valentino, бейсболка Kiton',
            cat: 3,
        },
        {
            id: 3,
            text: 'aaaaaaaaaaaaaaaaaaaaaaa',
            cat: 1,
        },
        {
            id: 4,
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbb',
            cat: 3,
        },
        {
            id: 5,
            text: 'Пуховый жилет Kiton, джинсы Jacob Cohen, футболка Fedeli, кроссовки Valentino, бейсболка Kiton',
            cat: 1,
        },
        {
            id: 6,
            text: 'Пуховый жилет Kiton, джинсы Jacob Cohen, футболка Fedeli, кроссовки Valentino, бейсболка Kiton',
            cat: 3,
        },
    ]

    return (
        <div className={css.assemblagecomp}>
            <div className={css.container}>
                <h1>КОЛЛЕКЦИЯ</h1>
                <div className={css.assemblagecomp__filter}>
                    <button onClick={() => setCategory(1)}>по популярности</button>
                    <button onClick={() => setCategory(0)}>все</button>
                    <button onClick={() => setCategory(3)}>по цене</button>
                </div>
                <div className={css.assemblagecomp__wrapper}>
                    {card.filter(item => item.cat == category ).map( item => {
                        return (
                            <>
                                <CollectionCard link='/form' text={item.text} img={man} />
                            </>
                        )
                    })}
                </div>
                <Privilege/>
            </div>
        </div>
    );
};

export default Assemblagecomp;