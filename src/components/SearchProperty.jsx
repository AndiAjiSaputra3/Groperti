import React, { useState } from 'react';
import { selectedProperty } from '../data/dummy';

export default function SearchProperty() {
    const [selectProperty, setSelectProperty] = useState([])

    const handleSelectionProperty = (event) => {
        setSelectProperty(event.target.value);
    };

    return (
        <div className=' py-6'>
            <div className='p-2 w-52 h-10  bg-white rounded-xl'>
                <select value={selectProperty} onChange={handleSelectionProperty} className={`w-full px-2 rounded-lg outline-none ${selectProperty ? 'border-transparent' : 'border'}`}>
                    <option>Property Type</option>
                    {selectedProperty.map(item => (
                        <option key={item.id} value={item.id} className="rounded-md hover:bg-gray-100 transition-colors">{item.name}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}