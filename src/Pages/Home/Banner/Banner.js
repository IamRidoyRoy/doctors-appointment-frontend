import React from 'react';
import bannerImage from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import './Banner.css';
import PrimaryButton from '../../../components/PrimaryButton';
const Banner = () => {
    return (
        // This is homepage banner 

        <div className="hero  bg-base-200" >
            <div className="hero-content flex-col lg:flex-row-reverse px-12 "
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',

                }}
            >
                <img src={bannerImage} className=" w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">All doctors treat, but a good doctor lets nature heal!</p>
                    {/* <button className="bannerbtn btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button> */}
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;