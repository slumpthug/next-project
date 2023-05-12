import React from 'react';
import css from './Basketcomp-style.module.css';
import Privilege from '../privilege/Privilege';
import Image from 'next/image';
import ticket from '../../public/basket/ticket.svg';
import boots from '../../public/basket/boots.png';
import close from '../../public/basket/close.svg';
import cdek from '../../public/basket/cdek.svg';
import MainButtonTwo from '../main-button-two/MainButtonTwo';

const Basketcomp = () => {
    return (
        <div className={css.basketcomp}>
            <div className={css.container}>
                <div className={css.basket__content}>
                    <div className={css.basket__table}>
                        <div className={css.basket__card}>
                            <div className={css.info__cont}>
                                <Image src={boots} alt="boots" />
                                <div className={css.card__title}>
                                    <h4 className={css.card__title_before}>Ботинки из телячьей кожи Brunello Cucinelli</h4>
                                    <span>Размер: 43</span>
                                </div>
                            </div>
                            <div className={css.price__cont}>
                                <span className={css.span_before}>43 000 р</span>
                                <span className={css.span_before}>-20 000 р</span>
                                <span className={css.span_before}>23 000 р</span>
                                <a href="#">
                                    <Image className={css.close} src={close} alt="cross" />
                                </a>
                            </div>
                        </div>
                        <div className={css.basket__card}>
                            <div className={css.info__cont}>
                                <Image src={boots} alt="boots" />
                                <div className={css.card__title}>
                                    <h4>Ботинки из телячьей кожи Brunello Cucinelli</h4>
                                    <span>Размер: 43</span>
                                </div>
                            </div>
                            <div className={css.price__cont}>
                                <span>43 000 р</span>
                                <span>-20 000 р</span>
                                <span>23 000 р</span>
                                <a href="#">
                                    <Image className={css.close} src={close} alt="cross" />
                                </a>
                            </div>
                        </div>
                        <a className={css.basket__btn} href="#">
                            <Image src={ticket} alt="ticket" />
                            <button>
                                Ввести купон 
                            </button>
                        </a>
                    </div>
                    <div className={css.basket__check}>
                        <h3>ВАШ ЗАКАЗ</h3>
                        <div className={css.check__sum}>
                            <span>Сумма заказа</span>
                            <span>43 000 р</span>
                        </div>
                        <div className={css.check__sum}>
                            <span>Сумма скидки</span>
                            <span className={css.blushing}>-20 000 р</span>
                        </div>
                        <div className={css.check__total}>
                            <span>ИТОГО</span>
                            <span>23 000 р</span>
                        </div>
                        <div className={css.check__delivery}>
                            <Image src={cdek} alt="cdek logo" />
                            <div className={css.delivery__text}>
                                <span>Бесплатная доставка в случае покупки товара</span>
                                <span>Доставка в случае отказа <br/> 1 500 руб.</span>
                            </div>
                        </div>
                        <a className={css.basket__btn_two} href="/decor">
                            оформить заказ
                        </a>
                    </div>
                </div>
                <Privilege/>
            </div>
        </div>
    );
};

export default Basketcomp;