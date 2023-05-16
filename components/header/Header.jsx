import css from './Header-style.module.css';
import Image from 'next/image';
import burgerMenu from '../../public/header/burger.svg';
import logo from '../../public/header/logo.svg';
import box from '../../public/header/box.svg';
import basket from '../../public/header/basket.svg';
import React, { useRef, useState } from 'react';


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



    const [searchTerm, setSearchTerm] = useState('');

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Отменить стандартное поведение формы
        handleSearch();
      }
    };



    return (
        <div className={css.header}>
            <div className={css.container}>
                <a className={css.burgerMenu_link} href="#">
                    <Image className={css.burgerMenu} src={burgerMenu} alt="burger menu" />
                </a>
                <a className={css.logo_link} href='#'>
                    <Image className={css.logo} src={logo} alt="companys logo" />
                </a>

                <input type="text" 
                className={css.search} 
                ref={searchRef} 
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyPress={handleKeyPress}
                />
                <button type="submit" onClick={handleSearch}>Search</button>
                <div className={css.links__container}>
                    <a className={css.user_link} href='/decor'>
                        <Image className={css.box} src={box} alt="box" />
                        <span>Доставка</span>
                    </a>
                    <a className={css.user_link} href='/basket'>
                        <Image className={css.basket} src={basket} alt="basket" />
                        <span>Корзина</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;