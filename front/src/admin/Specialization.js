import React, { useEffect, useState } from 'react';
import AdminSideBar from './AdminSideBar';
import { AxiosInstance } from '../components/AxiosInstance';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Specialization = () => {
    const [specializations, setSpecializations] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newSpecializationName, setNewSpecializationName] = useState('');

    useEffect(() => {
        const fetchSpecializations = async () => {
            try {
                const response = await AxiosInstance.get('adminn/specialisations/');
                setSpecializations(response.data);  
            } catch (error) {
                console.error('Error fetching specializations:', error);
            }
        };
      
        fetchSpecializations();  
    }, []);

    const handleDeactivate = async (id) => {
        try {
            await AxiosInstance.patch(`adminn/specrestore/${id}/`);
            toast('Specialisation deactivated successfully');
           
        } catch (error) {
            console.error('Error deactivating specialisation:', error);
        }
    };
       
    const handleRestore = async (id) => {
        try {
            await AxiosInstance.patch(`adminn/specdelete/${id}/`);
            alert('Specialisation restored successfully');
        } catch (error) {
            console.error('Error restoring specialisation:', error);
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewSpecializationName('');
    };

    const handleAddSpecialisation = async () => {
        try {
            await AxiosInstance.post('adminn/addspecialisation/', { name: newSpecializationName });
            const response = await AxiosInstance.get('adminn/specialisations/');
            setSpecializations(response.data);
            setShowModal(false);
            setNewSpecializationName('');
            toast('Specialisation deactivated successfully');
           
        } catch (error) {
            console.error("Error adding specialisation", error);
        }
    };

    return (
        <>
            <div className="flex max-h-screen ">
                <AdminSideBar />
                <div className="flex flex-col md:ml-96">
                    <div className="sm:-mx-6 lg:-mx-8 ">
                    <Toaster/>
                        <h1 className="text-center font-bold text-red-500 mt-4">Specializations</h1>
                      
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="flex justify-end mb-4">
                            <button onClick={handleOpenModal} className="bg-black text-white px-4 py-2 rounded">
                                Add new
                            </button>
                        </div>

                            <div className="overflow-y-auto md:mb-5">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-12 py-12">#</th>
                                            <th scope="col" className="px-12 py-12">Specialization Name</th>
                                            <th scope="col" className="px-12 py-12">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {specializations.map((specialization, index) => (
                                            <tr key={index} className={`${specialization.deleted ? 'text-red-500' : ''}`}>
                                                <td className="whitespace-nowrap px-12 py-12 font-medium">{index + 1}</td>
                                                <td className="whitespace-nowrap px-12 py-12">{specialization.name}</td>
                                                <td className="whitespace-nowrap px-12 py-12">
                                                    <button onClick={() => handleDeactivate(specialization.id)} className="mr-2 text-red-500">
                                                        <FaTrash />
                                                    </button>
                                                    <button onClick={() => handleRestore(specialization.id)} className="mr-2 text-blue-500">
                                                        <FaUndo />
                                                    </button>
                                                    <button className="text-green-500">
                                                        <FaEdit />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* <div className='relative'>
              {showModal &&(
                <div className='fixed inset-0 flex items-center justify-center shadow'>
                    <div className='absolute inset-0 bg-opacity-25 backdrop-blur-[3px] text-black' onClick={()=>setShowModal(false)}>hiiii
                    </div>
                    <div className='bg-red-400 z-10 w-[34rem] h=[22rem]'>Content</div>
                </div>

              )}
            </div> */}





            {/* Modal for adding a new specialization */}
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <label htmlFor="specializationName" className="block text-sm font-medium text-gray-700">
                                        Specialization Name
                                    </label>
                                    <input
                                        type="text"
                                        name="specializationName"
                                        id="specializationName"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter specialization name"
                                        value={newSpecializationName}
                                        onChange={(e) => setNewSpecializationName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={handleAddSpecialisation} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Add
                                </button>
                                <button onClick={handleCloseModal} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Specialization;
