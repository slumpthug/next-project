import React, { useState } from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Productcomp from '../../components/productcomp/Productcomp';
import boots from '../../public/basket/boots.png';



const product = () => {
    const [cartItems, setCartItems] = useState([{
        title: 'Ботинки из телячьей кожи Brunello Cucinelli',
        image: boots,
        size: "43",
        price: '43 000 р',
        skidka: '-20 000 р',
        resultPrice: "23 000 р"
    }]);
    return (
        <div>
            <Header />
            <BottomHeader text='товар' />
            {cartItems.map((item) => {
                return <Productcomp item={item} />
            })}
            <Footer />
        </div>
    );
};

export default product;