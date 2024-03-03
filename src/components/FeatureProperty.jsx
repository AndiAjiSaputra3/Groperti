import React from 'react'
import FeatureCards from './FeatureCards';
import FilterProperty from './FilterProperty';
import Search from './Search';

export default function FeatureProperty() {
    return (
        <div id='property' className='w-full pt-24'>
            <div className=' lg:text-center lg:w-2/3 px-10 lg:mx-auto'>
                <h2 className='text-2xl lg:text-4xl font-bold py-4'>Feature Property</h2>
                <p className=' text-sm lg:text-lg text-dark-gray pt-3'>Discover the true beauty of life with our superior properties, where luxury meets comfort. With stunning design, modern facilities and strategic location.</p>
            </div>
            <FilterProperty />
            <Search />
            <FeatureCards />
            <div className='py-10 px-28 flex justify-center'>
                <button className='py-3 w-40 outline outline-1 outline-primary rounded-md font-bold hover:bg-primary hover:text-white hover:outline-white'>See More</button>
            </div>
        </div>
    );
}