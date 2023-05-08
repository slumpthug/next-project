import React from 'react';
import css from './First-style.module.css';

const First = () => {
    return (
        <div className={css.first}>
            <div className={css.container}>
                <div className={css.man_part}>
                    <h2 className={css.first__title}>МУЖСКОЕ</h2>
                </div>
                <div className={css.woman_part}>
                    <h2 className={css.first__title}>ЖЕНСКОЕ</h2>
                </div>
            </div>
        </div>
    );
};

export default First;