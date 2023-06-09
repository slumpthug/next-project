import React from 'react';
import css from './BurgerModal-style.module.css';

const BurgerModal = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null; // Если модальное окно закрыто, возвращаем null, чтобы ничего не отображать
      }

    return (
        <div className={css.burgerModal}>
            <div className={css.container}>
                <div className={css.burgerModal__top}>
                    <h1>ВЫБЕРИТЕ КАТЕГОРИЮ</h1>
                    <button  onClick={onClose} >
                        <span>ЗАКРЫТЬ</span>
                    </button>
                </div>
                <div className={css.burgerModal__wrapper}>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    <a className={css.burgerModal__card} href="">
                        Новинки
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default BurgerModal;