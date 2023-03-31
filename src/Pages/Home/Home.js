import React from 'react';
import Banner from './Banner/Banner';
import CardsInfo from './CardInfo/CardsInfo';
import Services from './Services/Services';
import Cares from './Cares/Cares';
import MakeAppointmment from './MakeAppointment/MakeAppointmment';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CardsInfo></CardsInfo>
            <Services></Services>
            <Cares></Cares>
            <MakeAppointmment></MakeAppointmment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;