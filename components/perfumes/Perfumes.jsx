import React from 'react';
import css from './Perfumes-style.module.css';

const Perfumes = () => {
    return (
        <div className={css.perfumes}>
            <div className={css.container}>
                <div className={css.perfume_left}>
                    <button>парфюм</button>
                    <div className={css.perfumes__title}>
                        <h2>
                            Maison <br /> Francis Kurkdjian <br /> Baccarat Rouge 540
                        </h2>
                        <button>
                            <span>смотреть</span>
                        </button>
                    </div>
                </div>
                <div className={css.perfume_right}>
                    <button>запах месяца</button>
                    <div className={css.perfumes__title}>
                        <h2>
                            Dr.Vranjes <br /> Rosso Nibile
                        </h2>
                        <button>
                            <span>смотреть</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfumes;