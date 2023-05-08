import React from 'react';
import css from './Decorcomp-style.module.css';
import Privilege from '../privilege/Privilege';
import Image from 'next/image';
import cdek from '../../public/basket/cdek.svg';
import MainButtonTwo from '../main-button-two/MainButtonTwo';
import boots from '../../public/basket/boots.png';


const Decorcomp = () => {
    return (
        <div className={css.decor}>
            <div className={css.container}>
                <div className={css.decor__content}>
                    <div className={css.decor__inputs_part}>
                        <h3>ДЕТАЛИ ОПЛАТЫ</h3>
                        <div className={css.even__inputs}>
                            <input type="text" placeholder='Имя *'/>
                            <input type="text" placeholder='Фамилия *'/>
                        </div>
                        <div className={css.delivery__part}>
                            <div>
                                <h4>
                                    Выберите способ получения заказа:
                                </h4>
                                <div className={css.checkbox__cont}>
                                    <label><input className={css.checkbox} type="checkbox" />Доставка на дом</label>
                                    <label><input className={css.checkbox} type="checkbox" />Пункт выдачи СДЭК</label>
                                </div>
                            </div>
                            <div>
                                <h4>
                                    Страна/регион
                                </h4>
                                <span>Россия</span>
                            </div>
                        </div>
                        <div>
                            <h4>Адрес </h4>
                            <div className={css.uneven__inputs}>
                                <input type="text" placeholder='Город *'/>
                                <input type="text" placeholder='Номер дома и название улицы *'/>
                            </div>
                            <div className={css.even__inputs}>
                                <input type="text" placeholder='Email *'/>
                                <input type="text" placeholder='Телефон *'/>
                            </div>
                        </div>
                        <div>
                            <h4>Примечание к заказу</h4>
                            <textarea name="" id="" placeholder='Например, особые пожелания отделу доставки'></textarea>
                        </div>
                    </div>  
                    <div className={css.decor__check}>
                        <h3>ВАШ ЗАКАЗ</h3>
                        <div className={css.check__card_cont}>
                            <div className={css.check__card}>
                                <div className={css.card__title_cont}>
                                    <Image className={css.boots} src={boots} alt="boots" />
                                    <div className={css.card__title}>
                                        <h4>Ботинки из телячьей кожи Brunello Cucinelli</h4>
                                        <div>
                                            <span>Размер: 43</span>
                                            <span>Кол-во: 1</span>
                                        </div>
                                    </div>
                                </div>
                                <span className={css.card__ptice}>23 000 р</span>
                            </div>
                        </div>
                        <div className={css.price}>
                            <div className={css.check__sum}>
                                <span>Сумма заказа</span>
                                <span>43 000 р</span>
                            </div>
                            <div className={css.check__sum}>
                                <span>Сумма скидки</span>
                                <span className={css.blushing}>-20 000 р</span>
                            </div>
                            <div className={css.check__total}>
                                <span>К ОПЛАТЕ</span>
                                <span>23 000 р</span>
                            </div>
                        </div>
                        <div className={css.check__delivery}>
                            <Image src={cdek} alt="cdek logo" />
                            <div className={css.delivery__text}>
                                <p>Оплата осуществляется курьеру СДЭК картой или наличными. <span>Оплата после примерки.</span></p>
                            </div>
                        </div>
                        <MainButtonTwo text='ПОДТВЕРДИТЬ заказ'/>
                    </div>
                </div>
                <Privilege/>
            </div>
        </div>
    );
};

export default Decorcomp;