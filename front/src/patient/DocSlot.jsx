import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BaseUrl } from '../components/BaseUrl';
import HomeNavbar from './HomeNavbar';
import { AxiosInstance } from '../components/AxiosInstance';
import toast, { Toaster } from 'react-hot-toast';
import querystring from 'query-string'

const DocSlot = () => {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const { doctor_id } = queryParams;
    const [selectedDate, setSelectedDate] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
    const [doctorDetails, setDoctorDetails] = useState({});
    const [selectedSlot, setSelectedSlot] = useState(null); 
    const [slotid,setSlotId]=useState(null)
    const navigate=useNavigate()
    console.log(doctorDetails,"---------doc---------")

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await AxiosInstance.post('patient/doctordetail/', {
                    doctor_id: doctor_id
                });
                setDoctorDetails(response.data);
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };
    
        fetchDoctor();
    }, [doctor_id]);

    useEffect(() => {  
        const currentDate = new Date().toISOString().slice(0, 10); 
        setSelectedDate(currentDate); 
        fetchAvailableSlots(currentDate);
    }, []); 

    const handleDateChange = async (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate);
        fetchAvailableSlots(selectedDate);
    };

    const fetchAvailableSlots = async (date) => {
        try {
            const response = await AxiosInstance.post('patient/getdocslots/', {
                selected_date: date,
                doctor_id: doctor_id
            });
            setAvailableSlots(response.data.time_slots);
        } catch (error) {
            console.error('Error fetching available slots:', error);
        }
    };
  const handleSlotSelection = (slot) => {
    setSelectedSlot(prevSlot => prevSlot && prevSlot.start_time === slot.start_time ? null : slot); 
    setSlotId(slot.id)
    console.log('Selected Slot:', slot); // Add this log statement
};


    const handleBookingConfirmation = async (doctorId) => {

        // Booking details to send to the backend
        if (selectedSlot && selectedSlot.start_time) {
            const bookingDetails = {
                doctor: doctor_id,
                date: selectedDate,
                timeslot:slotid,
                start_time: selectedSlot.start_time,
            };
            console.log(bookingDetails, "-------book-------------");
    
            try {
                const response = await AxiosInstance.post('patient/bookslot/', bookingDetails);
                const data={
                    doctor_id:doctor_id,
                    // doctor_name: `${doctorDetails.first_name} ${doctorDetails.last_name}`,
                    date:selectedDate,
                    amount:doctorDetails.consultation_fee,  
                }
                const queryStringData=querystring.stringify(data)
                console.log('Booking confirmation response:', response.data);
                toast.success('slot selected successfully!')
                navigate(`/patient/payment/?${queryStringData}`)
            } catch (error) {
                console.error('Error confirming booking:', error);
            }
        } else {
            console.error('No slot selected or invalid slot'); // Handle the case when no slot is selected or slot is invalid
        }
    };
    return (
        <>
            <HomeNavbar />
            <div className='grid grid-cols-12'>
                <Toaster/>
                <div className='flex justify-start ml-52 col-span-5'>
                    {doctorDetails && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                            <img className="w-full h-64 object-cover rounded-sm" src={BaseUrl + doctorDetails.profile_image} alt="Doctor" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{doctorDetails.first_name} {doctorDetails.last_name}</div>
                                <p className="text-gray-700 text-base mb-2">{doctorDetails.specialisation}</p>
                                <p className="text-gray-700 text-base mb-2">Experience: {doctorDetails.exp} years</p>
                                <p className="text-red-500 text-base mb-2">Consultation fee: {doctorDetails.consultation_fee}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-span-7 mt-8'>
                    <label htmlFor="date">Select Date:</label>
                    <input className='bg-gray-400 rounded-md h-8' type="date" id="date" onChange={handleDateChange} value={selectedDate} />
                    <div className="flex flex-wrap mt-4">
                        {availableSlots.map((slot, index) => (
                            <div
                                className={`w-24 h-12 text-white rounded-md flex items-center justify-center mx-2 my-2 hover:bg-pink-900 ${selectedSlot == slot? 'bg-green-500' : ' bg-pink-400'}`}
                                key={index}
                                onClick={() => handleSlotSelection(slot)}
                                style={{ cursor: 'pointer' }}
                            >
                                {slot.start_time}
                            </div>
                        ))}
                    </div>
                    {/* <Link
                    to={{
                        pathname: '/patient/payment/',
                        state: {
                            consultationFee: doctorDetails.consultation_fee,
                            doctorId: doctor_id
                        }
                    }}
                > */}
                    <button className='w-48 h-10 rounded-md bg-green-600 hover:bg-green-800 mt-8' onClick={handleBookingConfirmation}>
                        Confirm Booking
                    </button>
                </div>
            </div>
        </>
    );
};

export default DocSlot;
