import React from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Assemblagecomp from '../../components/assemblagecomp/Assemblagecomp';

const assemblage = () => {
    return (
        <div>
            <Header />
            <BottomHeader text='Коллекция' />
            <Assemblagecomp />
            <Footer />
        </div>
    );
};

export default assemblage;