import React from 'react';
import Banner from './Banner/Banner';
import CardsInfo from './CardInfo/CardsInfo';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CardsInfo></CardsInfo>
        </div>
    );
};

export default Home;