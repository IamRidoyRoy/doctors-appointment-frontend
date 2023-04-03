import React, { useEffect, useState } from 'react';
import AptBanner from './AptBanner/AptBanner';
import AvailableServices from './AvailableServices/AvailableServices';
import AptOptions from './AptOptions/AptOptions';
import BookingModal from './BookingModal/BookingModal';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    const [options, setOptions] = useState([]);
    console.log(options)
    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])
    return (
        <div className='mx-5'>
            <AptBanner selected={selected} setSelected={setSelected}></AptBanner>
            <AvailableServices selected={selected}></AvailableServices>
            <div className='lg:mx-14 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    options.map((option) => <AptOptions key={option._id} option={option}></AptOptions>
                    )
                }
            </div>
            <BookingModal></BookingModal>
        </div>

    );
};

export default Appointment;