import React from 'react';

const AptOptions = ({ option }) => {
    const { name, slots } = option;
    return (

        <div className="card  bg-base-100 shadow-xl text-center ">
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try another day!"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces available" : 'space available'}!</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AptOptions;