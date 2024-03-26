import React, { useEffect, useState } from 'react'
import AdminSideBar from './AdminSideBar'
import { AxiosInstance } from '../components/AxiosInstance'

const Specialization = () => {
    const [specializations, setSpecializations] = useState([]);

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
      
  return (
    <>
    <div className="flex ">
      <AdminSideBar />
      <div className="flex flex-col overflow-x-auto justify-center md:ml-96">
        <div className="sm:-mx-6 lg:-mx-8 justify-center">
          <h1 className="text-center font-bold text-red-500 mt-4">Specializations</h1>
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
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
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-12 py-12 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-12 py-12">{specialization.name}</td>
                      {/* <td className="whitespace-nowrap px-12 py-12">
                        <button onClick={() => handleDelete(patient.id)} className="mr-2">
                          <FaTrash />
                        </button>
                        <button>
                          <FaEdit />
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Specialization
