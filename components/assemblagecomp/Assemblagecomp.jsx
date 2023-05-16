import React from 'react';
import css from './Assemblage-style.module.css';
import Privilege from '../privilege/Privilege';
import CollectionCard from '../collection-card/CollectionCard';
import man from '../../public/collection/man.jpg';

const Assemblagecomp = () => {
    return (
        <div className={css.assemblagecomp}>
            <div className={css.container}>
                <h1>КОЛЛЕКЦИЯ</h1>
                <div className={css.assemblagecomp__filter}>
                    <span>Сортировать</span>
                    <div>по популярности</div>
                </div>
                <div className={css.assemblagecomp__wrapper}>
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                    <CollectionCard text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man} />
                </div>
                <Privilege />
            </div>
        </div>
    );
};

export default Assemblagecomp;