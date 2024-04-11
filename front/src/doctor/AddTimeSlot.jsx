import React, { useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';

const AddTimeslot = ({ onAdd }) => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post('doctor/timeslots/', {
                start_time: startTime,
                end_time: endTime,
                date: date,
                available: true // Set as available by default
            });
            onAdd(response.data); // Pass the new timeslot data to the parent component
            // Clear the form fields
            setStartTime('');
            setEndTime('');
            setDate('');
        } catch (error) {
            console.error('Error adding timeslot:', error);
        }
    };

    return (
        <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Add Timeslot</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="startTime">Start Time</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startTime" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="endTime">End Time</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endTime" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="date">Date</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Timeslot</button>
            </form>
        </div>
    );
};

export default AddTimeslot;
