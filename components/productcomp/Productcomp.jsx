"use client";
import React, { useRef, useState } from "react";
import css from './Productcomp-style.module.css';
import logo from '../../public/product/logo.jpg';
import street from '../../public/product/street.jpg';
import Image from "next/image";
import man from '../../public/form/man.jpg';
import MainButtonTwo from "../main-button-two/MainButtonTwo";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Privilege from "../privilege/Privilege";
import DeliveryModal from "../delivery-modal/DeliveryModal";



const Productcomp = ({ item }) => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }




  return (
    <div className={css.product}>
      <div className={css.container}>
        <div className={css.product__container}>
          <div className={css.product__slider}>
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
          <div className={css.product__info}>
            <div className={css.product__titles}>
              <h1>
                {item.title}
              </h1>
              <span>Артикул: MTS806699/.C1091-1-1</span>
            </div>
            <div className={css.product__price}>
              <span>{item.skidka}</span>
              <span>{item.price}</span>
            </div>
            <div className={css.product__size}>
              <button>{item.size}</button>
              <button>{item.size}</button>
              <button>{item.size}</button>
              <button>{item.size}</button>
            </div>
            <div className={css.product__buttons}>
              <MainButtonTwo text='в корзину' />
              <MainButtonTwo text='быстрый заказ' onClick={handleOpenModal} />
            </div>
            <DeliveryModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className={css.product__description}>
              <p>
                Куртка-бомбер из замшевого ширлинга Texture, который имеет бархатистый и матовый вид с наружной стороны. Пушистая и теплая внутренняя сторона обеспечивает должную защиту для холодного сезона.
              </p>
              <span>Данная модель большемерит на размер.</span>
              <ul>
                <li>Материал: <span>100% дубленая кожа</span></li>
                <li>Подкладка: <span>100% овчина</span></li>
                <li>Производитель: <span>Италия</span></li>
              </ul>
            </div>
            <div className={css.product__address}>
              <Image className={css.logo} src={logo} alt="brand logo" />
              <div className={css.product__card}>
                <Image className={css.street} src={street} alt="street" />
                <div className={css.card__description}>
                  <h4>Товар в наличии</h4>
                  <a href="#">www.artigiani.boutique</a>
                  <a href="#">Санкт-Петербург, Большой проспект ПС 13</a>
                </div>
              </div>
            </div>
            <div className={css.product__links}>
              <a href="#">Смотреть все джинсы</a>
              <a href="#">Смотреть все товары бренда</a>
              <a href="#">Смотреть все товары для мужчин</a>
            </div>
          </div>
        </div>
        <Privilege />
      </div>
    </div>
  );
};

export default Productcomp;