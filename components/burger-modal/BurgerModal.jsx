import React from 'react';
import css from './BurgerModal-style.module.css';
import Image from 'next/image';
import close from '../../public/delivery-modal/close.svg';

const BurgerModal = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null; // Если модальное окно закрыто, возвращаем null, чтобы ничего не отображать
    }

    return (
        <div className={css.burgerModal} onClick={() => onClose(false)}>
            <div className={css.container} onClick={(e) => e.stopPropagation()}>
                <div className={css.burgerModal__top}>
                    <h1>ВЫБЕРИТЕ КАТЕГОРИЮ</h1>
                    <button  onClick={onClose} >
                        <span>ЗАКРЫТЬ</span>
                        <Image className={css.close} src={close} alt="close img" />
                    </button>
                </div>
                <div className={css.burgerModal__wrapper}>
                    <a href='/catalog' className={css.burgerModal__card}>
                        каталог
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BurgerModal;