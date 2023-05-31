import React from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Formcomp from '../../components/formcomp/Formcomp';

const form = () => {
    return (
        <div>
            <Header />
            <BottomHeader text='образ' />
            <Formcomp />
            <Footer />
        </div>
    );
};

export default form;