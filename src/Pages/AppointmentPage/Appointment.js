import React, { useState } from 'react';
import AptBanner from './AptBanner/AptBanner';
import AvailableServices from './AvailableServices/AvailableServices';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AptBanner selected={selected} setSelected={setSelected}></AptBanner>
            <AvailableServices selected={selected}></AvailableServices>
        </div>
    );
};

export default Appointment;