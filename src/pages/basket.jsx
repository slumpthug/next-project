import React from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Basketcomp from '../../components/basketcomp/Basketcomp';

const basket = () => {
    return (
        <div>
            <Header/>
            <BottomHeader text='Корзина'/>
            <Basketcomp/>
            <Footer/>
        </div>
    );
};

export default basket;