import React from 'react'
import imgAboutUs from "../assets/imgAboutUs.png";
import iconAboutUs1 from "../assets/iconAboutUs1.png";
import iconAboutUs2 from "../assets/iconAboutUs2.png";
import iconAboutUs3 from "../assets/iconAboutUs3.png";

export default function AboutUs() {
    return (
        <div id='about us' className='w-full pt-20 px-10'>
            <div class="grid lg:grid-cols-2">
                <div className="hidden lg:flex justify-center ">
                    <div className=''>
                        <img src={imgAboutUs} alt="Image Home" className='w-full h-full' />
                    </div>
                </div>
                <div className='py-10 px-6 lg:w-5/6 text-justify'>
                    <h3 className='py-2 text-secondary text-xl text-center'>Benefit of listing on groperti</h3>
                    <h1 className='py-1 font-bold text-2xl lg:text-3xl text-primary text-center'>Value We Give To You</h1>
                    <p className='py-2 text-center lg:text-justify text-dark-gray'>"The 'Value We Give You' at Groperti is more than just a tagline – it is our promise. We are dedicated to providing unmatched value through quality products, and a seamless shopping experience. Your satisfaction is our priority, and we are proud to offer no only goods, but also a commitment to excellence.</p>
                    <div class="pt-2 ">
                        <div className="py-4 md:flex gap-5">
                            <img src={iconAboutUs1} alt="" className='w-14 h-12 mx-auto lg:mx-0' />
                            <p className='text-dark-gray text-center md:text-justify mt-6 md:mt-0'>Take advantage of our exclusive opportunities! Enjoy free promotions for your product or property at Groperti. With free registration, you can increase your visibility and grab the attention of more potential customers at no additional cost. Don't miss this opportunity to grow your business online.</p>
                        </div>
                        <div className="py-4 md:flex gap-5">
                            <img src={iconAboutUs2} alt="" className='w-14 h-12 mx-auto lg:mx-0' />
                            <p className='text-dark-gray text-center md:text-justify mt-6 md:mt-0'>Join the bartering revolution at Groperti! Exchange your products or properties for what you want without needing to use money. We open barter listing opportunities, allowing you to make mutually beneficial exchanges.</p>
                        </div>
                        <div className="py-4 md:flex gap-5">
                            <img src={iconAboutUs3} alt="" className='w-14 h-12 mx-auto lg:mx-0' />
                            <p className='text-dark-gray text-center md:text-justify mt-6 md:mt-0'>Gain mutual benefits at Groperti with our profit sharing program! We believe that success is the result of cooperation, therefore, we present the opportunity for you to share profits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}