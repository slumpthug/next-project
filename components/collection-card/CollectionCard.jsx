import React from 'react';
import css from './CollectionCard_style.module.css';
import Image from 'next/image';

<<<<<<< HEAD
const CollectionCard = ({text, img, link}) => {
=======
const CollectionCard = ({ text, img }) => {
>>>>>>> origin/feature/aziz
    return (
        <a href={link} className={css.collection__card}>
            <Image className={css.man} src={img} alt="" />
            <p>{text}</p>
        </a>
    );
};

export default CollectionCard;