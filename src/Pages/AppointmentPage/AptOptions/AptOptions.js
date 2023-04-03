import React from 'react';

const AptOptions = ({ option }) => {
    // const { slots } = option;
    // console.log(option)
    return (

        <div className="card w-80 bg-base-100 shadow-xl text-center ">
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary">{option.name}</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AptOptions;