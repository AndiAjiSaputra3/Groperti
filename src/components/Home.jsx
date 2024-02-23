import React from 'react'
import imgHome from "../assets/imgHome1.png";
import profileHans from "../assets/profileHans.jpg";
import profileWulan from "../assets/profileWulan.jpg";
import { FaStar } from "react-icons/fa";


export default function Home() {
    return (
        <div id='home' className='w-full'>
            <div class="pt-32 lg:pt-20 grid lg:grid-cols-2 px-8 lg:px-28">
                <div className='m-auto'>
                    <h2 className='py-8 font-bold text-secondary text-3xl'>FIND THE BEST PROPERTY</h2>
                    <h1 className='font-bold text-4xl'>Find the convenience of shopping with GroPerti.</h1>
                    <p className='py-5 pb-10 text-justify w-5/6 text-dark-gray'>Groperti is here to make your shopping experience easier, more economical and more enjoyable. By listing on Groperti, you will get free promotion on social media</p>
                    <button className='bg-secondary text-white font-bold py-2.5 w-full md:w-48 rounded-lg hover:bg-selective-yellow hover:text-dark'>Get Started</button>

                    <div class="pt-5 grid grid-cols-3 lg:w-4/5 lg:text-start">
                        <div className="py-4">
                            <h1 className='text-5xl font-bold text-blue-green'>9k<span className='text-sky-blue'>+</span></h1>
                            <p>Completed Property</p>
                        </div>
                        <div className="py-4">
                            <h1 className='text-5xl font-bold text-blue-green'>21k<span className='text-sky-blue'>+</span></h1>
                            <p>Happy Clients</p>
                        </div>
                        <div className="py-4">
                            <h1 className='text-5xl font-bold text-blue-green'>1k<span className='text-sky-blue'>+</span></h1>
                            <p>Apartement Rent</p>
                        </div>
                    </div>
                </div>
                <div className="m-auto hidden lg:flex justify-center ">
                    <div className='relative -right-20'>
                        <img src={imgHome} alt="Image Home" className='w-4/5 h-full' />
                        <div className='p-4 m-8 w-56 bg-white shadow-lg rounded-xl flex justify-between absolute top-10 right-0'>
                            <img src={profileHans} alt="Profile Hans" className='rounded-lg w-14 h-14' />
                            <div>
                                <p className='text-md'>Hasan Waulat</p>
                                <div className='flex gap-x-0.5'>
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                </div>
                            </div>
                        </div>
                        <div className='p-4 m-8 w-56 bg-white shadow-lg rounded-xl flex justify-between absolute top-60 -left-36'>
                            <img src={profileWulan} alt="Profile Wulan" className='rounded-lg w-14 h-14' />
                            <div>
                                <p className='text-md'>Wulan Sari</p>
                                <div className='flex gap-x-0.5'>
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                    <FaStar className='text-selective-yellow w-5 h-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
