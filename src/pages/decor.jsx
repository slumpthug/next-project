import React from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Decorcomp from '../../components/decorcomp/Decorcomp';

const decor = () => {
    return (
        <div>
            <Header />
            <BottomHeader text='ОФОРМЛЕНИЕ' />
            <Decorcomp />
            <Footer />
        </div>
    );
};

export default decor;