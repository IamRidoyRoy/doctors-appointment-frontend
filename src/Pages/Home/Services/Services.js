import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        },
        {
            id: 2,
            icon: cavity,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        },
        {
            id: 3,
            icon: whitening,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        },
    ]
    return (
        <div className='mt-16'>
            <h3 className='flex justify-center open-sans text-xl text-primary mt-32'>OUR SERVICES</h3>
            <h1 className='flex justify-center open-sans text-4xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    servicesData.map((service) => <Service key={service} service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default Services;