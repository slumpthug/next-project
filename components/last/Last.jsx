import React from 'react';
import css from './Last-style.module.css';
import Image from 'next/image';
import logo from '../../public/last/logo.svg';
import phone from '../../public/last/phone.png';
import Privilege from '../privilege/Privilege';

const Last = () => {
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
                            <div className={css.last__inputs}>
                                <input type="text" placeholder='Имя'/>
                                <input type="text" placeholder='Телефон'/>
                                <button>оформить рассылку</button>
                            </div>
                        </div>
                    </div>
                    <Privilege/>
                </div>
            </div>
        </div>
    );
};

export default Last;