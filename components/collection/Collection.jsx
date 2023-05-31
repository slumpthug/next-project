"use client";
import React from 'react';
import css from './Collection-style.module.css';
import MainButton from '../main-button/MainButton';
import man from '../../public/collection/man.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import CollectionCard from '../collection-card/CollectionCard';

const Collection = () => {
    return (
        <div className={css.collection}>
            <div className={css.container}>
                <h1>КОЛЛЕКЦИЯ</h1>
                <div className={css.collection__wrapper}>
                    <CollectionCard link='/form' text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man}/>
                    <CollectionCard link='/form' text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man}/>
                    <CollectionCard link='/form' text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man}/>
                </div>
                <div className={css.collection__slider}>
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ["-120%", 0, -500],
                            },
                            next: {
                                shadow: true,
                                translate: ["120%", 0, -500],
                            },
                        }}
                        modules={[EffectCreative]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <CollectionCard link='/form' text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CollectionCard link='/form' text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man}/>  
                        </SwiperSlide>
                        <SwiperSlide>
                            <CollectionCard link='/form' text='Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni' img={man}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <MainButton link='/assemblage' text="смотреть больше" />
            </div>
        </div>
    );
};

export default Collection;