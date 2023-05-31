import React, { useState } from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Catalogcomp from '../../components/catalogcomp/Catalogcomp';

const catalog = () => {

    return (
        <div>
            <Header/>
            <BottomHeader text='каталог'/>
            <Catalogcomp/>
            <Footer/>
        </div>
    );
};

export default catalog;