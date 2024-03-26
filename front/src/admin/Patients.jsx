import React, { useEffect, useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import AdminSideBar from './AdminSideBar';
// import { FaEdit, FaTrash } from 'react-icons/fa';



const Patients = () => {
  const [patients, setPatients] = useState([]); 

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await AxiosInstance.get('adminn/patientlist/');
        setPatients(response.data);  
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();  
  }, []);

  return (
    <div className="flex">
      <AdminSideBar />
      <div className="flex flex-col overflow-x-auto">
      <h1 className="text-center font-bold text-red-500 mt-4">Patients</h1>
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-12 py-12">#</th>
                    <th scope="col" className="px-12 py-12">First Name</th>
                    <th scope="col" className="px-12 py-12">Last Name</th>
                    <th scope="col" className="px-12 py-12">Age</th>
                    <th scope="col" className="px-12 py-12">Email</th>
                    <th scope="col" className="px-12 py-12">Phone Number</th>
                    <th scope="col" className="px-12 py-12">Place</th>
                    <th scope="col" className="px-12 py-12">Actions</th>
                  </tr>
                </thead>
                <tbody>
                {patients.map((patient, index) => (
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-12 py-12 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-12 py-12">{patient.first_name}</td>
                      <td className="whitespace-nowrap px-12 py-12">{patient.last_name}</td>
                      <td className="whitespace-nowrap px-12 py-12">{patient.age}</td>
                      <td className="whitespace-nowrap px-12 py-12">{patient.email}</td>
                      <td className="whitespace-nowrap px-12 py-12">{patient.phone_number}</td>
                      <td className="whitespace-nowrap px-12 py-12">{patient.place}</td>
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
  );
}

export default Patients;
