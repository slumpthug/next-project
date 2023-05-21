import React from 'react';
import Link from 'next/link';
import css from './BurgerModal-style.module.css';
import Image from 'next/image';
import close from '../../public/delivery-modal/close.svg';
import { useRouter } from 'next/router';

const navigation = [
    { id: 1, title: 'каталог', path: '/catalog'},
    { id: 1, title: 'санжар лох', path: '/loh'}
];

const BurgerModal = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null; // Если модальное окно закрыто, возвращаем null, чтобы ничего не отображать
    }

    const { pathname } = useRouter();

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
                    {navigation.map(item => {
                        return(
                            <Link href={item.path} className={pathname == item.path ? css.burgerModal__card_active : css.burgerModal__card}>
                                {item.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default BurgerModal;