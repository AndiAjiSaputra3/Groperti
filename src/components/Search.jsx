import React, { useState } from 'react';
import SearchLocation from './SearchLocation';
import SearchProperty from './SearchProperty';
import SearchBudget from './SearchBudget';


export default function Search() {

    const Search = () => {
        const [selectedOption, setSelectedOption] = useState('');

        const handleSelectionChange = (event) => {
            setSelectedOption(event.target.value);
        };
    }

    return (
        <div className='hidden lg:block py-10 w-full h-screen'>
            <div className='w-2/3 m-auto bg-sky-blue p-8 shadow-md rounded-xl'>
                <h2 className='font-bold text-xl'>
                    Search for available properties
                </h2>
                <div className='flex items-center gap-5'>
                    <SearchLocation />
                    <SearchProperty />
                    <SearchBudget />
                    <button className='py-2 px-4 w-36 h-10 bg-primary text-white rounded-lg hover:bg-dark'>Search</button>
                </div>
            </div>
        </div>
    );
}