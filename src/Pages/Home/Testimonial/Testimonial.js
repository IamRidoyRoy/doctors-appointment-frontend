import React from 'react';

const Testimonial = ({ data }) => {
    const { name, description, image, state } = data;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div className='flex space-x-3.5 m-4 items-center'>
                        <div >
                            <div className="avatar ">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={image} alt='' />
                                </div>
                            </div>
                        </div>
                        <div >
                            <h2 className="card-title">{name}</h2>
                            <p>{state}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Testimonial;