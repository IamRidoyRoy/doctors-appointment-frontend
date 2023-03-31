import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';
const MakeAppointmment = () => {
    return (
        <section className='mt-16'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero lg:px-32 gap-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" hidden lg:block lg:w-1/2 rounded-lg shadow-2xl -mt-32" alt='doctor' />
                    <div >
                        <h4 className='text-xl text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-base text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default MakeAppointmment;