import React, { useEffect, useState } from 'react';
import DocNavbar from './DocNavbar';
import ProfileSideBar from './ProfileSideBar';
import { AxiosInstance } from '../components/AxiosInstance';
import { Toaster, toast } from 'react-hot-toast';

const SlotScheduling = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [error, setError] = useState(null);
    const [available,setIsAvailable]=useState(false)
    const [timeSlots, setTimeSlots] = useState([
        '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '1:00', '1:30', '2:00', '2:30', '3:00','3:30',
        '4:00','4:30','5:00','5:30','6:30','7:00','7:30','8:00'
    ]);
    const [selectedSlots, setSelectedSlots] = useState([]);
  

    const handleSlotClick = (slot) => {
        const isSlotSelected = selectedSlots.includes(slot);
        const updatedSelectedSlots = isSlotSelected
            ? selectedSlots.filter(selectedSlot => selectedSlot !== slot)
            : [...selectedSlots, slot];
        setSelectedSlots(updatedSelectedSlots);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const promises = selectedSlots.map(slot => {
            return AxiosInstance.post('doctor/createtimeslot/', {
                date: selectedDate,
                start_time: slot
            });
        });
    
        Promise.all(promises)
            .then(responses => {
                console.log('time slots added', responses);
                toast.success('Time slots added successfully!!!');
                setIsAvailable(true);
                setSelectedSlots([]);
            })
            .catch(error => {
                console.log('error adding time slots:', error);
                setError(error);
            });
    };
    

    return (
        <>
            <DocNavbar />
            <Toaster />
            <div className='grid sm:grid-cols-12'>
                <div className='col-span-2'>
                    <ProfileSideBar />
                </div>
                <div className='flex justify-center my-8 col-span-10'>
                    <form className="w-full max-w-md" onSubmit={handleSubmit}>
                        <div className="flex items-center mb-4">
                            <label className='mr-2'>Select Date:</label>
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type='date' value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                        </div>
                        <div className='grid grid-cols-6 gap-4'>
                            {timeSlots.map((slot, index) => (
                                <div key={index} className={`border p-4 cursor-pointer hover:border-blue-600 ${selectedSlots.includes(slot) ? 'bg-blue-200' : ''}`} onClick={() => handleSlotClick(slot)}>
                                    {slot}
                                </div>
                            ))}
                        </div>
                        <button className='bg-blue-500 text-white px-4 py-2 mt-4 rounded' onClick={handleSubmit}>Add Time Slots</button>
                        {error && <p className='text-red-500'>Error: {error.message}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default SlotScheduling;
