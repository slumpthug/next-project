import css from './Header-style.module.css';
import Image from 'next/image';
import burgerMenu from '../../public/header/burger.svg';
import logo from '../../public/header/logo.svg';
import basket from '../../public/header/basket.svg';
import React, { useRef, useState } from 'react';
import BurgerModal from '../burger-modal/BurgerModal';


const Header = () => {

    const searchRef = useRef(null);

    const handleSearch = () => {
        const searchText = searchRef.current.value;
        const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');

        for (let i = 0; i < headers.length; i++) {
            const headerText = headers[i].textContent.toLowerCase();

            if (headerText.includes(searchText.toLowerCase())) {
                headers[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            }
        }
    };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div className={css.header}>
            <div className={css.container}>
                <button type='submit' className={css.burgerMenu_link} onClick={handleOpenModal}>
                    <Image className={css.burgerMenu} src={burgerMenu} alt="burger menu" />
                </button>
                <a className={css.logo_link} href='#'>
                    <Image className={css.logo} src={logo} alt="companys logo" />
                </a>
                <input type="text" placeholder='Поиск по продукции' className={css.search} ref={searchRef} />
                <button type="submit" onClick={handleSearch}>Search</button>
                <a className={css.user_link} href='/basket'>
                    <Image className={css.basket} src={basket} alt="basket" />
                    <span>Корзина</span>
                    <span>3</span>
                </a>
                <BurgerModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </div>
    );
};

export default Header;