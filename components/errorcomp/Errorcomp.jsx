import React from 'react';
import css from './Errorcomp-style.module.css';

const Errorcomp = () => {
    return (
        <div className={css.errorcomp}>
            <div className={css.container}>
                <p>Упс... что то пошло не так</p>
            </div>
        </div>
    );
};

export default Errorcomp;