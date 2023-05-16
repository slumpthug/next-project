"use client";
import React, { useState } from 'react';
import css from './Last-style.module.css';
import Image from 'next/image';
import logo from '../../public/last/logo.svg';
import phone from '../../public/last/phone.png';
import Privilege from '../privilege/Privilege';


const Last = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Поле "Имя" обязательно для заполнения';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Поле "Телефон" обязательно для заполнения';
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            errors.phone = 'Введите корректный номер телефона (10 цифр без пробелов и дефисов)';
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            // Отправка данных формы
            setFormData({
                name: '',
                phone: '',
            });
            setErrors({});
        } else {
            setErrors(errors);
        }
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
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
        <div className={css.last}>
            <div className={css.container}>
                <div className={css.last__title}>
                    <Image className={css.logo} src={logo} alt="logo" />
                    <p>Изделия премиального качества из самых лучших материалов, ориентируясь на традиции итальянских производителей.</p>
                    <a href='/assemblage'>
                        <span>смотреть КОЛЛЕКЦИЮ</span>
                    </a>
                </div>
                <div className={css.margin}>
                    <div className={css.last__content}>
                        <Image className={css.phone} src={phone} alt="phone" />
                        <div className={css.last__user_part}>
                            <h2>
                                оформите подписку на рассылку INTEFRA
                            </h2>
                            <form onSubmit={handleSubmit} className={css.last__inputs}>
                                <div className={css.input_and_error}>
                                    <input type="text" placeholder='Имя'
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <span className={css.errors}>{errors.name}</span>}
                                </div>
                                <div className={css.input_and_error}>
                                    <input type="text" placeholder='Телефон'
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    {errors.phone && <span className={css.errors}>{errors.phone}</span>}

                                </div>

                                <button type='submit'>оформить рассылку</button>
                            </form>
                        </div>
                    </div>
                    <Privilege />
                </div>
            </div>
        </div>
    );
};

export default Last;