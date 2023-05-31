"use client";
import React, { useRef, useState } from "react";
import css from './Formcomp-style.module.css';
import Image from "next/image";
import jacket from '../../public/form/jacket.png';
import man from '../../public/form/man.jpg';
import MainButtonTwo from "../main-button-two/MainButtonTwo";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Privilege from "../privilege/Privilege";

const Formcomp = () => {
  return (
    <div className={css.form}>
      <div className={css.container}>
        <div className={css.form__container}>
          <div className={css.form__slider}>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className={css.swiper}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
            >
              <SwiperSlide>
                <Image className={css.man} src={man} alt="man" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={css.man} src={man} alt="man" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={css.man} src={man} alt="man" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={css.man} src={man} alt="man" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={css.man} src={man} alt="man" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={css.form__info}>
            <h1>ОБРАЗ В ДЕТАЛЯХ</h1>
            <div className={css.form__card_wrapper}>
              <div className={css.form__card}>
                <Image className={css.jacket} src={jacket} alt="jacket" />
                <div className={css.card__title}>
                  <h4>
                    Жилет с капюшоном и наполнителем из пуха Cortigiani
                  </h4>
                  <div className={css.card__sizes}>
                    <button>50</button>
                    <button>52</button>
                    <button>54</button>
                    <button>56</button>
                  </div>
                </div>
                <div className={css.card__prices}>
                  <span>123 000 ₽</span>
                  <span>96 000 ₽</span>
                </div>
                <MainButtonTwo text='КУПИТЬ' />
              </div>
              <div className={css.form__card}>
                <Image className={css.jacket} src={jacket} alt="jacket" />
                <div className={css.card__title}>
                  <h4>
                    Жилет с капюшоном и наполнителем из пуха Cortigiani
                  </h4>
                  <div className={css.card__sizes}>
                    <button>50</button>
                    <button>52</button>
                    <button>54</button>
                    <button>56</button>
                  </div>
                </div>
                <div className={css.card__prices}>
                  <span>123 000 ₽</span>
                  <span>96 000 ₽</span>
                </div>
                <MainButtonTwo text='КУПИТЬ' />
              </div>
              <div className={css.form__card}>
                <Image className={css.jacket} src={jacket} alt="jacket" />
                <div className={css.card__title}>
                  <h4>
                    Жилет с капюшоном и наполнителем из пуха Cortigiani
                  </h4>
                  <div className={css.card__sizes}>
                    <button>50</button>
                    <button>52</button>
                    <button>54</button>
                    <button>56</button>
                  </div>
                </div>
                <div className={css.card__prices}>
                  <span>123 000 ₽</span>
                  <span>96 000 ₽</span>
                </div>
                <MainButtonTwo text='КУПИТЬ' />
              </div>
              <div className={css.form__card}>
                <Image className={css.jacket} src={jacket} alt="jacket" />
                <div className={css.card__title}>
                  <h4>
                    Жилет с капюшоном и наполнителем из пуха Cortigiani
                  </h4>
                  <div className={css.card__sizes}>
                    <button>50</button>
                    <button>52</button>
                    <button>54</button>
                    <button>56</button>
                  </div>
                </div>
                <div className={css.card__prices}>
                  <span>123 000 ₽</span>
                  <span>96 000 ₽</span>
                </div>
                <MainButtonTwo text='КУПИТЬ' />
              </div>
            </div>
          </div>
        </div>
        <Privilege />
      </div>
    </div>
  );
};

export default Formcomp;