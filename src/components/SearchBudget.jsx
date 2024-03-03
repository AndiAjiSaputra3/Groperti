import React, { useState } from 'react';
import { selectedBudget } from '../data/dummy';

export default function SearchBudget() {
    const [selectBudget, setSelectBudget] = useState([])

    const handleSelectionBudget = (event) => {
        setSelectBudget(event.target.value);
    };

    return (
        <div className='flex justify-center py-2'>
            <div className='p-2 w-56 h-10 rounded-xl'>
                <select value={selectBudget} onChange={handleSelectionBudget} className={`w-full py-2 px-2 border border-primary rounded-lg outline-none ${selectBudget ? 'border-transparent' : 'border'}`}>
                    <option>Budget</option>
                    {selectedBudget.map(item => (
                        <option key={item.id} value={item.id} className="rounded-md hover:bg-gray-100 transition-colors">{item.name}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}