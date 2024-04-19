import React, { useEffect, useState } from 'react';
import DocNavbar from './DocNavbar';
import ProfileSideBar from './ProfileSideBar';
import { AxiosInstance } from '../components/AxiosInstance';
import { Toaster, toast } from 'react-hot-toast';


const SlotScheduling = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [error, setError] = useState(null);
    const [available,setIsAvailable]=useState(false)
    const [scheduledSlots, setScheduledSlots] = useState([]);
    const [showModal,setShowModal]=useState(false)
    const [slotToDelete,setSlotToDelete]=useState(null)
    const [timeSlots, setTimeSlots] = useState([
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '01:00', '01:30', '02:00', '02:30', '03:00','03:30',
        '04:00','04:30','05:00','05:30','06:30','07:00','07:30','08:00'
    ]);
    const [selectedSlots, setSelectedSlots] = useState([]);
    console.log(scheduledSlots,"-----------schediledslot-------------")
  
    // Fetch scheduled slots for the current date when the component mounts
    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format
        AxiosInstance.get(`doctor/gettimeslots/${currentDate}/`)
            .then(response => {
                console.log(response.data,"---------dates------------")
                setScheduledSlots(response.data);
            })
            .catch(error => {
                console.error('Error fetching scheduled slots:', error);
            });
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    useEffect(() => {
        if (selectedDate) {
            AxiosInstance.get(`doctor/gettimeslots/${selectedDate}/`)
                .then(response => {
                    console.log(response.data,"---------dates------------")
                    setScheduledSlots(response.data);
                })
                .catch(error => {
                    console.error('Error fetching scheduled slots:', error);
                });
        }
    }, [selectedDate, selectedSlots]); 
    

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
                // Refresh scheduled slots after adding new slots
                AxiosInstance.get(`doctor/gettimeslots/${selectedDate}/`)
                    .then(response => {
                        setScheduledSlots(response.data);
                        console.log(response.data,"-------slotsavai-------------")
                    })
                    .catch(error => {
                        console.error('Error fetching scheduled slots:', error);
                    });
            })
            .catch(error => {
                console.log('error adding time slots:', error);
                setError(error);
            });
    };


    const handleDoubleClick = (slot) => {
        console.log(slot,"-----------slot-------------")
        setShowModal(true);
        setSlotToDelete(slot); 
    };


    const handleDeleteConfirmation = () => {
        if (slotToDelete) {
          AxiosInstance.post('doctor/deleteslot/', {
            slot_id: slotToDelete.id // Assuming the slot object has an "id" property
          })
            .then(response => {
              console.log(response.data);
              toast.success("Slot deleted successfully!");
              setShowModal(false);
    
              // Refresh scheduled slots after deletion
              AxiosInstance.get(`doctor/gettimeslots/${selectedDate}/`)
                .then(response => {
                  setScheduledSlots(response.data);
                  console.log(response.data, "-------slotsavai-------------");
                })
                .catch(error => {
                  console.error('Error fetching scheduled slots:', error);
                });
            })
            .catch(error => {
              console.error('Error deleting the slot:', error);
              toast.error('Error deleting slot!'); // Display error message to user
            });
        }
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
                                <div key={index}
                                    className={` ${scheduledSlots.includes(slot+":00") ? 'bg-pink-200' : ''} border p-4 cursor-pointer hover:border-blue-600 ${selectedSlots.includes(slot) ? 'bg-blue-200' : 'bg-gray-500'}`}
                                    onClick={() => handleSlotClick(slot)}
                                    onDoubleClick={() => handleDoubleClick(slot)}>
                                    {slot}
                                </div>  
                            ))}
                        </div>
                        <button className='bg-blue-500 text-white px-4 py-2 mt-4 rounded' type="submit">Add Time Slots</button>
                        {error && <p className='text-red-500'>Error: {error.message}</p>}
                    </form>
                </div>
                  {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p>Are you sure you want to delete this slot?</p>
                        <div className="flex justify-end mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded mr-4" onClick={() => handleDeleteConfirmation()}>Delete</button>
                            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </>
    );
};

export default SlotScheduling;
