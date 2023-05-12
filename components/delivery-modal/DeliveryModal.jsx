import React from 'react';
import css from './DeliveryModal-style.module.css';
import MainButtonTwo from '../main-button-two/MainButtonTwo';
import Image from 'next/image';
import jacket from '../../public/delivery-modal/jacket.png';
import close from '../../public/delivery-modal/close.svg';

const DeliveryModal = ({ isOpen, onClose }) => {

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
                <div className={css.deliveryModal__order}>
                    <h1>БЫСТРЫЙ ЗАКАЗ</h1>
                    <input type="text" placeholder='Имя'/>
                    <input type="text" placeholder='Телефон'/>
                    <MainButtonTwo text='купить' />
                    <span>
                        Завершая оформление заказа, я подтверждаю ознакомление с 
                        <a href="#">указанными условиями</a>
                    </span>
                </div>
                <button className={css.DeliveryModal__close} onClick={onClose} >
                    <Image className={css.close} src={close} alt="close img" />
                </button>
            </div>
        </div>
    );
};

export default DeliveryModal;