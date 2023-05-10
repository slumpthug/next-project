import React from 'react';
import css from './First-style.module.css';

const First = () => {
    return (
        <div className={css.first}>
            <div className={css.container}>
                <div className={css.man_part}>
                    <a href='#' className={css.first__title}>МУЖСКОЕ</a>
                </div>
                <div className={css.woman_part}>
                    <a href='#' className={css.first__title}>ЖЕНСКОЕ</a>
                </div>
            </div>
        </div>
    );
};

export default First;