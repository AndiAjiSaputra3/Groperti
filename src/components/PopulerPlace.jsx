import React from 'react'
import PopularCards from './PopularCards'

export default function PopulerSearch() {
    return (
        <div id='costumer' className='w-full pt-24'>
            <div className=' lg:text-center lg:w-2/3 px-10 lg:mx-auto'>
                <h2 className='text-2xl lg:text-4xl font-bold'>Most Popular Place</h2>
                <p className=' text-sm lg:text-lg text-dark-gray pt-3'>Explore and enjoy selected products that meet the highest standards, because at Groperti, popularity means excellence.</p>
            </div>
            <PopularCards />
            <div className='py-10 px-28 flex justify-center'>
                <button className='py-3 w-40 outline outline-1 outline-primary rounded-md font-bold hover:bg-primary hover:text-white hover:outline-white'>See More</button>
            </div>
        </div>
    )
}
