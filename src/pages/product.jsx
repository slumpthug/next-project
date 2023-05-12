import React from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Productcomp from '../../components/productcomp/Productcomp';

const product = () => {
    return (
        <div>
            <Header/>
            <BottomHeader text='товар'/>
            <Productcomp/>
            <Footer/>
        </div>
    );
};

export default product;