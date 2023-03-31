import React from 'react';
import Banner from './Banner/Banner';
import CardsInfo from './CardInfo/CardsInfo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CardsInfo></CardsInfo>
            <Services></Services>
        </div>
    );
};

export default Home;