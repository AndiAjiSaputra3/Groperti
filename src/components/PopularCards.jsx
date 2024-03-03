import React from 'react'
import imageFeature from "../assets/imageFeature.jpg";

export default function PopularCards() {
    return (
        <div className='w-full pt-6 grid md:grid-cols-2 lg:grid-cols-3 px-40 md:px-10 lg:px-28 gap-y-10 md:gap-x-6 lg:gap-x-36 justify-items-center mt-6'>
            <div className='w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className=' px-4 py-4'>
                    <h3 className='text-dark-gray font-bold'>Nort Jakarta, DKI Jakarta</h3>
                    <p className='text-dark-gray text-xs mt-1'>14 property</p>
                    <button className=' mt-8 bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className=' px-4 py-4'>
                    <h3 className='text-dark-gray font-bold'>Nort Jakarta, DKI Jakarta</h3>
                    <p className='text-dark-gray text-xs mt-1'>14 property</p>
                    <button className=' mt-8 bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className=' px-4 py-4'>
                    <h3 className='text-dark-gray font-bold'>Nort Jakarta, DKI Jakarta</h3>
                    <p className='text-dark-gray text-xs mt-1'>14 property</p>
                    <button className=' mt-8 bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='lg:block w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className=' px-4 py-4'>
                    <h3 className='text-dark-gray font-bold'>Nort Jakarta, DKI Jakarta</h3>
                    <p className='text-dark-gray text-xs mt-1'>14 property</p>
                    <button className=' mt-8 bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='hidden lg:block w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className=' px-4 py-4'>
                    <h3 className='text-dark-gray font-bold'>Nort Jakarta, DKI Jakarta</h3>
                    <p className='text-dark-gray text-xs mt-1'>14 property</p>
                    <button className=' mt-8 bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='hidden lg:block w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className=' px-4 py-4'>
                    <h3 className='text-dark-gray font-bold'>Nort Jakarta, DKI Jakarta</h3>
                    <p className='text-dark-gray text-xs mt-1'>14 property</p>
                    <button className=' mt-8 bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
        </div>
    );
}