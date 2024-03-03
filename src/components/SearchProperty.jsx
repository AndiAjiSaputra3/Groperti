import React, { useState } from 'react';
import { selectedProperty } from '../data/dummy';

export default function SearchProperty() {
    const [selectProperty, setSelectProperty] = useState([])

    const handleSelectionProperty = (event) => {
        setSelectProperty(event.target.value);
    };

    return (
        <div className='flex justify-center py-2'>
            <div className='p-2 w-56 h-10 rounded-xl'>
                <select value={selectProperty} onChange={handleSelectionProperty} className={`w-full py-2 px-2 border border-primary rounded-lg outline-none ${selectProperty ? 'border-transparent' : 'border'}`}>
                    <option>Property Type</option>
                    {selectedProperty.map(item => (
                        <option key={item.id} value={item.id} className="rounded-md hover:bg-gray-100 transition-colors">{item.name}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}