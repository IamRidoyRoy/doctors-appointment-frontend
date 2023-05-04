import React, { useEffect, useState } from 'react';
import AptBanner from './AptBanner/AptBanner';
import AvailableServices from './AvailableServices/AvailableServices';
import AptOptions from './AptOptions/AptOptions';
import BookingModal from './BookingModal/BookingModal';
import { useQuery } from 'react-query';

const Appointment = () => {
    // This state for selecting date 
    const [selected, setSelected] = useState(new Date());

    // to get and set modal data 

    const [treatment, setTreatment] = useState(null);


    // Fetching api data using react query 
    // const { data: slots = [] } = useQuery({
    //     queryKey: ['slots'],
    //     queryFn: () => fetch('http://localhost:5000/time-slots')
    //         .then(res => res.json())
    // })

    // Fetching api data using react query - async await 

    const { data: slots = [] } = useQuery({
        queryKey: ['slots'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/time-slots');
            const data = res.json();
            return data;
        }
    })


    return (
        <div className='mx-5'>
            <AptBanner selected={selected} setSelected={setSelected}></AptBanner>
            <AvailableServices selected={selected}></AvailableServices>
            <div className='lg:mx-14 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    slots.map((option) => <AptOptions setTreatment={setTreatment} key={option._id} option={option}></AptOptions>
                    )
                }
            </div>
            {
                treatment &&
                <BookingModal selected={selected} treatment={treatment} setTreatment={setTreatment}></BookingModal>
            }

        </div>

    );
};

export default Appointment;