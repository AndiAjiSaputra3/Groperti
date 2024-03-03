import React from 'react';
import SearchLocation from './SearchLocation';
import SearchProperty from './SearchProperty';
import SearchBudget from './SearchBudget';
import ButtonSearch from './ButtonSearch';


export default function Search() {

    return (
        <div className='hidden lg:block py-20 w-full'>
            <div className='w-9/12 m-auto bg-sky-blue p-8 shadow-md rounded-xl'>
                <h2 className='font-bold text-xl mb-5'>
                    Search for available properties
                </h2>
                <div className='flex items-center justify-between gap-5'>
                    <SearchLocation />
                    <SearchProperty />
                    <SearchBudget />
                    <ButtonSearch />
                </div>
            </div>
        </div>
    );
}