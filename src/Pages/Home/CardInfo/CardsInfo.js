import React from 'react';
import phone from '../../../assets/icons/phone.svg';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import CardInfo from './CardInfo';

const CardsInfo = () => {

    const cardsData = [
        {
            id: 1,
            name: 'Openig hours',
            descriptions: '8.00 am to 12.00 pm, then 1.30 pm to 6.30 pm',
            icon: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'

        },
        {
            id: 2,
            name: 'Visit our location',
            descriptions: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgColor: 'bg-neutral'

        },
        {
            id: 3,
            name: 'Contact us now',
            descriptions: '+8801779714999',
            icon: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'

        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-28'>
            {
                cardsData.map((card) => <CardInfo key={card.id} card={card}></CardInfo>)
            }
        </div>
    );
};

export default CardsInfo;