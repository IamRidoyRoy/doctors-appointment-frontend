import { format } from 'date-fns';
import React from 'react';

const AvailableServices = ({ selected }) => {
    return (
        <div className='my-4'>
            <p className='text-center text-primary font-bold'>Available Services on {format(selected, 'PP')}</p>
        </div>
    );
};

export default AvailableServices;