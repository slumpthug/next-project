"use client";
import React, { useState } from "react";
import css from './Decorcomp-style.module.css';
import Privilege from '../privilege/Privilege';
import Image from 'next/image';
import cdek from '../../public/basket/cdek.svg';
import MainButtonTwo from '../main-button-two/MainButtonTwo';
import boots from '../../public/basket/boots.png';








const Decorcomp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        city: '',
        houseNumber: '',
        email: '',
        phone: '',
        message: '',
        isHomeDeliveryChecked: false,
        isPickupPointChecked: false,
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'Поле "Имя" обязательно для заполнения';
        }
        if (!formData.lastName.trim()) {
            errors.lastName = 'Поле "Фамилия" обязательно для заполнения';
        }
        if (!formData.city.trim()) {
            errors.city = 'Поле "Город" обязательно для заполнения';
        }
        if (!formData.houseNumber.trim()) {
            errors.houseNumber = 'Поле "Номер дома" обязательно для заполнения';
        }
        if (!formData.message.trim()) {
            errors.message = 'Поле "Сообщение" обязательно для заполнения';
        }
        if (!formData.isHomeDeliveryChecked && !formData.isPickupPointChecked) {
            errors.checkbox = 'Выберите хотя бы одну опцию';
        }
        if (!formData.email.trim()) {
            errors.email = 'Поле обязательно для заполнения';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Неправильный формат почты';
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Поле обязательно для заполнения';
        } else if (!/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formData.phone)) {
            errors.phone = 'Неправильный формат телефона';
        }

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            // Отправка данных формы
            setFormData({
                firstName: '',
                lastName: '',
                city: '',
                houseNumber: '',
                email: '',
                phone: '',
                message: '',
                isHomeDeliveryChecked: false,
                isPickupPointChecked: false,
            });
            setErrors({});
        } else {
            setErrors(errors);
        }
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className={css.decor}>
            <div className={css.container}>
                <div className={css.decor__content}>
                    <div className={css.decor__inputs_part}>
                        <h3>ДЕТАЛИ ОПЛАТЫ</h3>
                        <div className={css.even__inputs}>
                            <div className={css.input_and_error}>
                                <input type="text" placeholder='Имя *'
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                {errors.firstName && <span className={css.errors} >{errors.firstName}</span>}
                            </div>


                            <div className={css.input_and_error}>
                                <input type="text" placeholder='Фамилия *'

                                    name="lastName"
                                    value={formData.lastName}я
                                    onChange={handleInputChange}
                                />
                                {errors.lastName && <span className={css.errors}>{errors.lastName}</span>}

                            </div>
                        </div>
                        <div className={css.delivery__part}>
                            <div>
                                <h4>
                                    Выберите способ получения заказа:
                                </h4>
                                <div className={css.input_and_error}>
                                    <div className={css.checkbox__cont}>
                                        <label><input className={css.checkbox} type="checkbox"
                                            name="isHomeDeliveryChecked"
                                            checked={formData.isHomeDeliveryChecked}
                                            onChange={handleInputChange}
                                        />Доставка на дом</label>


                                        <label><input className={css.checkbox} type="checkbox"
                                            name="isPickupPointChecked"
                                            checked={formData.isPickupPointChecked}
                                            onChange={handleInputChange}
                                        />Пункт выдачи СДЭК</label>
                                    </div>
                                    {errors.checkbox && <span className={css.errors__checkbox}>{errors.checkbox}</span>}
                                </div>
                            </div>
                            <div>
                                <h4>
                                    Страна/регион
                                </h4>
                                <span>Россия</span>
                            </div>
                        </div>
                        <div className={css.decorcomp__address}>
                            <h4>Адрес </h4>
                            <div className={css.even__inputs}>
                                <div className={css.input_and_error} >
                                    <input type="text" placeholder='Город *'

                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange} />
                                    {errors.city && <span className={css.errors}>{errors.city}</span>}
                                                              </div>

                                    <div className={css.input_and_error} >
                                    <input type="text" placeholder='Номер дома и название улицы *'

                                    name="houseNumber"
                                    value={formData.houseNumber}
                                    onChange={handleInputChange}
                                    />
                                    {errors.houseNumber && <span className={css.errors}>{errors.houseNumber}</span>}

                                </div>
                              
                            </div>
                            <div className={css.even__inputs}>

                                <div className={css.input_and_error}>
                                    <input type="text" placeholder='Email *'

                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <span className={css.errors}>{errors.email}</span>}

                                </div>

                            <div className={css.input_and_error}>
                           
                                 <input type="text" placeholder='Телефон *'
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                {errors.phone && <span className={css.errors}>{errors.phone}</span>}

                            </div>
                        </div>
                        <div className={css.input_and_error}>
                            <h4>Примечание к заказу</h4>
                            <textarea name="message"
                                value={formData.message}
                                onChange={handleInputChange} id="" placeholder='Например, особые пожелания отделу доставки' />
                            {errors.message && <span className={css.errors__message}>{errors.message}</span>}

                        </div>
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
                        <MainButtonTwo  text='ПОДТВЕРДИТЬ заказ' />
                    </div>
                </div>
                <Privilege />
            </div>
        </form>
    );
};

export default Decorcomp;