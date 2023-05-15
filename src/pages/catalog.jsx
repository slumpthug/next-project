import React, { useState } from 'react';
import Header from '../../components/header/Header';
import BottomHeader from '../../components/bottom-header/BottomHeader';
import Footer from '../../components/footer/Footer';
import Catalogcomp from '../../components/catalogcomp/Catalogcomp';

const catalog = () => {
    let [catalog, setCatalog] = useState('')

    const catalogs = [
        {
            title: 'ОБУВЬ',
            desc: 'Мы собрали шикарную коллекцию итальянских марок обуви от самых ведущих производителей:',
            brands: [
                'Loro Piana',
                'Kiton',
                'Brunello Cucinelli',
                'Santoni',
                'Moreschi',
                'Barrett',
                'Testoni',
                'Artigiani',
                'Moreschi',
                'Zegna',
            ],
            card: [
                {
                    id: 1,
                    text: 'ботинки', 
                },
                {
                    id: 2,
                    text: 'ботинки',
                },
                {
                    id: 3,
                    text: 'ботинки', 
                },
                {
                    id: 4,
                    text: 'ботинки',
                },
                {
                    id: 5,
                    text: 'ботинки', 
                },
                {
                    id: 6,
                    text: 'ботинки',
                },
            ],
            id: 1,
        },
        {
            title: 'Жилетки',
            desc: 'Мы собрали шикарную коллекцию итальянских марок обуви от самых ведущих производителей:',
            brands: [
                'Lola',
                'Popa Negra',
                'Sanjar loh',
                'Yasha Lava',
                'Mamut Rahal',
                'Tvoi Ded',
                'Testoni',
                'Artigiani',
                'Moreschi',
                'Zegna',
            ],
            card: [
                {
                    id: 1,
                    text: 'жилетка', 
                },
                {
                    id: 2,
                    text: 'жилетка',
                },
                {
                    id: 3,
                    text: 'жилетка', 
                },
                {
                    id: 4,
                    text: 'жилетка',
                },
                {
                    id: 5,
                    text: 'жилетка', 
                },
                {
                    id: 6,
                    text: 'жилетка',
                },
            ],
            id: 2,
        }
    ]

    return (
        <div>
            <Header setCatalog={setCatalog}/>
            <BottomHeader text='каталог'/>
            <div>
                {catalogs.filter(item => item.id == catalog ).map( item => {
                    return (
                        <>
                            <Catalogcomp title={item.title} desc={item.desc} links={item.brands} cardTitle={item.card}/>
                        </>
                    )
                })}
            </div>
            <Footer/>
        </div>
    );
};

export default catalog;