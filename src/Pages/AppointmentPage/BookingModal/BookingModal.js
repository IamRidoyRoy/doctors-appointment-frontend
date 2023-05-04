import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP')
    const { user } = useContext(AuthContext)

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone
        }
        // Send booking data to backend
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confiremed!')
                }
                refetch();

            })



    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 py-6 gap-4 justify-items-center'>
                        <input type="text" disabled value={date} className=" h-12 input input-bordered w-full max-w-xs" />
                        <select name='slot' className='select select-bordered w-full max-w-xs'>
                            {
                                slots.map((slot) => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="name" defaultValue={user?.displayName} placeholder="Your Name" className=" h-12 input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email Address" className=" h-12 input input-bordered w-full max-w-xs" />
                        <input name='phone' type="phone" placeholder="Phone number" className=" h-12 input input-bordered w-full max-w-xs" />
                        <button className='btn btn-accent w-full max-w-xs' type='submit'>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;