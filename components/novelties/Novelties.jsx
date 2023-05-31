"use client";
import React from 'react';
import css from './Novelties-style.module.css';
import Image from 'next/image';
import bag from '../../public/novelties/bag.jpg';
import MainButton from '../main-button/MainButton';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";

const Novelties = () => {
    return (
        <div className={css.novelties}>
            <div className={css.container}>
                <div className={css.novelties__titles}>
                    <h1>НОВИНКИ</h1>
                    <h3>648 ОБНОВЛЕНИЙ</h3>
                </div>
                <div className={css.novelties__slider}>
                    <Swiper
                        slidesPerView={'auto'}
                        initialSlide={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1500}
                        grabCursor={true}
                        preventClicks={true}
                        modules={[Autoplay]}
                        className={css.swiper}
                    >
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={css.novelties__slider_two}>
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
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <MainButton text='смотреть все' />
            </div>
        </div>
    );
};

export default Novelties;