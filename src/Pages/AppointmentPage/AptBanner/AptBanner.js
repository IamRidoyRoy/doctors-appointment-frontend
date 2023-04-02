import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AptBanner = ({ selected, setSelected }) => {

    return (
        <header>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-28">
                    <img src={chair} alt='chair' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        ></DayPicker>
                        <p>You picked {format(selected, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AptBanner;