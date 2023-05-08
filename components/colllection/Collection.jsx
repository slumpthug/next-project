"use client";
import React from 'react';
import css from './Collection-style.module.css';
import Image from 'next/image';
import MainButton from '../main-button/MainButton';
import man from '../../public/collection/man.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";

const Collection = () => {
    return (
        <div className={css.collection}>
            <div className={css.container}>
                <h1>КОЛЛЕКЦИЯ</h1>
                <div className={css.collection__wrapper}>
                    <div className={css.collection__card}>
                        <Image className={css.man} src={man} alt="" />
                        <p>Спортивный костюм Artigiani, футболка Artigiani, джинсы Jacob Cohen, кеды Santoni</p>
                    </div>
                    <div className={css.collection__card}>
                        <Image className={css.man} src={man} alt="" />
                        <p>Пуховый жилет Kiton, джинсы Jacob Cohen, футболка Fedeli, кроссовки Valentino</p>
                    </div>
                    <div className={css.collection__card}>
                        <Image className={css.man} src={man} alt="" />
                        <p>Парка Artigiani, джемпер Artigiani,джинсы Jacob Cohen, челси Santoni</p>
                    </div>
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
                            <div className={css.collection__card}>
                                <Image className={css.man} src={man} alt="" />
                                <p>Парка Artigiani, джемпер Artigiani,джинсы Jacob Cohen, челси Santoni</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.collection__card}>
                                <Image className={css.man} src={man} alt="" />
                                <p>Парка Artigiani, джемпер Artigiani,джинсы Jacob Cohen, челси Santoni</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.collection__card}>
                                <Image className={css.man} src={man} alt="" />
                                <p>Парка Artigiani, джемпер Artigiani,джинсы Jacob Cohen, челси Santoni</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <MainButton text="смотреть больше" />
            </div>
        </div>
    );
};

export default Collection;