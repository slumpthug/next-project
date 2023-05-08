import React from 'react';
import css from './Privilege-style.module.css';
import Image from 'next/image';
import bags from '../../public/privilege/bags.svg';

const Privilege = () => {
    return (
        <div className={css.privilege}>
            <div className={css.container}>
                <div>
                    <Image className={css.bags} src={bags} alt="bags" />
                    <p>Работаем c 2012 года</p>
                </div>
                <div>
                    <Image className={css.bags} src={bags} alt="bags" />
                    <p>оригинальные вещи</p>
                </div>
                <div>
                    <Image className={css.bags} src={bags} alt="bags" />
                    <p>Доставка по России</p>
                </div>
                <div>
                    <Image className={css.bags} src={bags} alt="bags" />
                    <p>Есть услуга “Примерки”</p>
                </div>
            </div>
        </div>
    );
};

export default Privilege;