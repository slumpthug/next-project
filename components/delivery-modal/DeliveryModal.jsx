import React, { useState } from 'react';
import css from './DeliveryModal-style.module.css';
import MainButtonTwo from '../main-button-two/MainButtonTwo';
import Image from 'next/image';
import jacket from '../../public/delivery-modal/jacket.png';
import close from '../../public/delivery-modal/close.svg';


const DeliveryModal = ({ isOpen, onClose }) => {


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

    if (!isOpen) {
        return null; // Если модальное окно закрыто, возвращаем null, чтобы ничего не отображать
    }


    return (
        <div className={css.deliveryModal} onClick={() => onClose(false)}>
            <div className={css.container} onClick={(e) => e.stopPropagation()}>
                <div className={css.deliveryModal__card}>
                    <Image className={css.jacket} src={jacket} alt="jacket" />
                    <div className={css.card__info}>
                        <h3>Замшевая куртка-бомбер на овчине <span>Brunello Cucinelli</span></h3>
                        <div className={css.card__price}>
                            <span>123 000 ₽</span>
                            <span>96 000 ₽</span>
                        </div>
                        <span className={css.card__size}>50</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={css.deliveryModal__order}>
                    <h1>БЫСТРЫЙ ЗАКАЗ</h1>
                    <input type="text" placeholder='Имя'
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange} />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

                    <input type="text" placeholder='Телефон'
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange} />
                    {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}

                    <MainButtonTwo text='купить' />
                    <span>
                        Завершая оформление заказа, я подтверждаю ознакомление с
                        <a href="#">указанными условиями</a>
                    </span>
                </form>
                <button className={css.DeliveryModal__close} onClick={onClose} >
                    <Image className={css.close} src={close} alt="close img" />
                </button>
            </div>
        </div>
    );
};

export default DeliveryModal;