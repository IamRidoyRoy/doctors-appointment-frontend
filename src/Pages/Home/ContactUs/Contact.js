import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import appintment from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div className='text-center py-16 '
            style={{
                backgroundImage: `url(${appintment})`,
                background: 'cover',
                height: '604px',

            }}
        >
            <h3 className='text-primary text-xl '>Contact Us</h3>
            <h1 className='text-4xl text-white mb-10'>Stay connected with us</h1>

            <form action="">
                <input type="text " placeholder="Email Address" className="input w-full max-w-xs mb-5" /><br />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs mb-5" /> <br />
                <textarea className="textarea textarea-accent mb-8 w-full max-w-xs" placeholder="Your Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </form>

        </div >
    );
};

export default Contact;