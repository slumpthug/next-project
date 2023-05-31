"use client";
import React from 'react';
import css from './Promotion-style.module.css';
import Image from 'next/image';
import bag from '../../public/novelties/bag.jpg';
import MainButton from '../main-button/MainButton';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css";

const Promotion = () => {
    return (
        <div className={css.promotion}>
            <div className={css.container}>
                <div className={css.promotion__billboard}>
                    <h2>
                        Скидки <br /> <span> до -70%</span>
                    </h2>
                </div>
                <div className={css.promotion__info}>
                    <h2>скидки</h2>
                    <div className={css.promotion__slider}>
                        <Swiper
                            slidesPerView={4}
                            initialSlide={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            // breakpoints={{
                            //     1500: {
                            //         slidesPerView: 4,
                            //     },
                            //     1300: {
                            //         slidesPerView: 2,
                            //     },
                            // }}
                            speed={1500}
                            grabCursor={true}
                            preventClicks={true}
                            modules={[Autoplay]}
                            className={css.swiper}
                        >
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={css.promotion__slider_two}>
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
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <MainButton text='смотреть все' />
                </div>
            </div>
        </div>
    );
};

export default Promotion;