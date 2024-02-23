import React, { useState } from 'react';
import { selectedLocation } from '../data/dummy';

export default function SearchLocation() {
    const [selectLocation, setSelectLocation] = useState([])

    const handleSelectionLocation = (event) => {
        setSelectLocation(event.target.value);
    };

    return (
        <div className=' py-6'>
            <div className='p-2 w-52 h-10  bg-white rounded-xl'>
                <select value={selectLocation} onChange={handleSelectionLocation} className={`w-full px-2 rounded-lg outline-none ${selectLocation ? 'border-transparent' : 'border'}`}>
                    <option>Location</option>
                    {selectedLocation.map(item => (
                        <option key={item.id} value={item.id} className="rounded-md hover:bg-gray-100 transition-colors">{item.name}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}