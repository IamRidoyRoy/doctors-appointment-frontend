import React, { useEffect, useState } from 'react';
import AptBanner from './AptBanner/AptBanner';
import AvailableServices from './AvailableServices/AvailableServices';
import AptOptions from './AptOptions/AptOptions';
import BookingModal from './BookingModal/BookingModal';

const Appointment = () => {
    // This state for selecting date 
    const [selected, setSelected] = useState(new Date());

    // to get and set modal data 

    const [treatment, setTreatment] = useState(null);

    // This state for booking name , slots options 
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
                    options.map((option) => <AptOptions setTreatment={setTreatment} key={option._id} option={option}></AptOptions>
                    )
                }
            </div>
            {
                treatment &&
                <BookingModal selected={selected} treatment={treatment}></BookingModal>
            }

        </div>

    );
};

export default Appointment;