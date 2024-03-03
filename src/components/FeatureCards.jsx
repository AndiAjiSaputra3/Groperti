import React from 'react'
import imageFeature from "../assets/imageFeature.jpg"
import { FaLocationDot } from "react-icons/fa6";


export default function FeatureCards() {
    return (

        <div className='w-full pt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-40 md:px-10 lg:px-28 gap-8 justify-items-center'>
            <div className='w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className='w-20'>
                    <p className=' bg-blue-green text-white py-1 px-2 rounded-lg absolute top-3 left-2'>For Sale</p>
                </div>
                <div>
                    <p className='absolute top-36 left-2 text-white font-bold'>Rp. 32 Juta / Bulan</p>
                </div>
                <div className=' px-4 py-4'>
                    <h3 className=' text-blue-green font-bold'>Apartement</h3>
                    <h3 className='font-bold pt-2'>Atlantis Residance</h3>
                    <a href="#" className='pt-2 flex items-center gap-2 text-base text-dark-gray'>
                        <FaLocationDot />
                        Nort Jakarta, DKI Jakarta
                    </a>
                    <div className='py-4 grid grid-cols-3 text-dark-gray text-xs text-center'>
                        <div>
                            <p className='text-dark-grey'>Badroom : 4</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Living Room : 2</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Bathroom : 2</p>
                        </div>
                    </div>
                    <button className=' bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className='w-20'>
                    <p className=' bg-blue-green text-white py-1 px-2 rounded-lg absolute top-3 left-2'>For Sale</p>
                </div>
                <div>
                    <p className='absolute top-36 left-2 text-white font-bold'>Rp. 32 Juta / Bulan</p>
                </div>
                <div className=' px-4 py-4'>
                    <h3 className=' text-blue-green font-bold'>Apartement</h3>
                    <h3 className='font-bold pt-2'>Atlantis Residance</h3>
                    <a href="#" className='pt-2 flex items-center gap-2 text-base text-dark-gray'>
                        <FaLocationDot />
                        Nort Jakarta, DKI Jakarta
                    </a>
                    <div className='py-4 grid grid-cols-3 text-dark-gray text-xs text-center'>
                        <div>
                            <p className='text-dark-grey'>Badroom : 4</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Living Room : 2</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Bathroom : 2</p>
                        </div>
                    </div>
                    <button className=' bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className='w-20'>
                    <p className=' bg-blue-green text-white py-1 px-2 rounded-lg absolute top-3 left-2'>For Sale</p>
                </div>
                <div>
                    <p className='absolute top-36 left-2 text-white font-bold'>Rp. 32 Juta / Bulan</p>
                </div>
                <div className=' px-4 py-4'>
                    <h3 className=' text-blue-green font-bold'>Apartement</h3>
                    <h3 className='font-bold pt-2'>Atlantis Residance</h3>
                    <a href="#" className='pt-2 flex items-center gap-2 text-base text-dark-gray'>
                        <FaLocationDot />
                        Nort Jakarta, DKI Jakarta
                    </a>
                    <div className='py-4 grid grid-cols-3 text-dark-gray text-xs text-center'>
                        <div>
                            <p className='text-dark-grey'>Badroom : 4</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Living Room : 2</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Bathroom : 2</p>
                        </div>
                    </div>
                    <button className=' bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
            <div className='lg:hidden w-80 h-auto rounded-xl shadow-lg overflow-hidden relative'>
                <img src={imageFeature} alt="" className='object-cover' />
                <div className='w-20'>
                    <p className=' bg-blue-green text-white py-1 px-2 rounded-lg absolute top-3 left-2'>For Sale</p>
                </div>
                <div>
                    <p className='absolute top-36 left-2 text-white font-bold'>Rp. 32 Juta / Bulan</p>
                </div>
                <div className=' px-4 py-4'>
                    <h3 className=' text-blue-green font-bold'>Apartement</h3>
                    <h3 className='font-bold pt-2'>Atlantis Residance</h3>
                    <a href="#" className='pt-2 flex items-center gap-2 text-base text-dark-gray'>
                        <FaLocationDot />
                        Nort Jakarta, DKI Jakarta
                    </a>
                    <div className='py-4 grid grid-cols-3 text-dark-gray text-xs text-center'>
                        <div>
                            <p className='text-dark-grey'>Badroom : 4</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Living Room : 2</p>
                        </div>
                        <div>
                            <p className='text-dark-grey'>Bathroom : 2</p>
                        </div>
                    </div>
                    <button className=' bg-primary py-3 rounded-lg w-full text-white hover:bg-dark-gray'>Details</button>
                </div>
            </div>
        </div>
    );
}