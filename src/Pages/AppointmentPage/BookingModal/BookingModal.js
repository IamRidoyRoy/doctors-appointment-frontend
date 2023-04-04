import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP')
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 py-6 gap-4 justify-items-center'>
                        <input type="text" disabled value={date} className=" h-12 input input-bordered w-full max-w-xs" />
                        <select className='select select-bordered w-full max-w-xs'>
                            {
                                slots.map((slot) => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className=" h-12 input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className=" h-12 input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className=" h-12 input input-bordered w-full max-w-xs" />
                        <button className='btn btn-accent w-full max-w-xs' type='submit'>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;