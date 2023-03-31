import React from 'react';

const CardInfo = ({ card }) => {
    const { name, descriptions, icon, bgColor } = card;
    // console.log(card)
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgColor} px-6 text-white`}>
            <figure><img width={52} src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {descriptions} </p>

            </div>
        </div>
    );
};

export default CardInfo;