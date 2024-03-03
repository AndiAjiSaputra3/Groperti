import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import SearchLocation from './SearchLocation';
import SearchBudget from './SearchBudget';
import SearchProperty from './SearchProperty';
import ButtonSearch from './ButtonSearch';

export default function FilterProperty() {
    const [showButtons, setShowButtons] = useState(false);

    const handleSelectionFilter = () => {
        setShowButtons(!showButtons);
    }

    return (
        <div className='py-6 px-10 lg:hidden'>
            <button onClick={handleSelectionFilter} className=' flex justify-between items-center w-60 py-3.5 px-8 border rounded-lg border-primary text-lg font-semibold' >
                Filter
                <CiFilter style={{ strokeWidth: "1" }} />
            </button>
            <div className='pt-2 flex'>
                {showButtons && (
                    <div className='border py-2 border-primary w-60 h-64 rounded-lg'>
                        <SearchLocation />
                        <SearchBudget />
                        <SearchProperty />
                        <ButtonSearch />
                    </div>
                )}
            </div>
        </div >
    )
}
