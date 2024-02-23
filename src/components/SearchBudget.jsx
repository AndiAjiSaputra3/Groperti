import React, { useState } from 'react';
import { selectedBudget } from '../data/dummy';

export default function SearchBudget() {
    const [selectBudget, setSelectBudget] = useState([])

    const handleSelectionBudget = (event) => {
        setSelectBudget(event.target.value);
    };

    return (
        <div className=' py-6'>
            <div className='p-2 w-52 h-10  bg-white rounded-xl'>
                <select value={selectBudget} onChange={handleSelectionBudget} className={`w-full px-2 rounded-lg outline-none ${selectBudget ? 'border-transparent' : 'border'}`}>
                    <option>Budget</option>
                    {selectedBudget.map(item => (
                        <option key={item.id} value={item.id} className="rounded-md hover:bg-gray-100 transition-colors">{item.name}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}