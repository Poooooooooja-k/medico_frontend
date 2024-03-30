import React, { useEffect, useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import AdminSideBar from './AdminSideBar';
import { Link } from 'react-router-dom';
import { BaseUrl } from '../components/BaseUrl';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]); 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await AxiosInstance.get('adminn/doctorlist/');
        setDoctors(response.data);  
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();  
  }, []);

  return (
    <div className="flex">
      <AdminSideBar />
      <div className="flex flex-col overflow-x-auto">
        <h1 className="text-center font-bold text-red-500 mt-4">Doctors</h1>
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-12 py-12">#</th>
                    <th scope="col" className="px-12 py-12">First Name</th>
                    <th scope="col" className="px-12 py-12">Last Name</th>
                    <th scope="col" className="px-12 py-12">Specialisation</th>
                    <th scope="col" className="px-12 py-12">Email</th>
                    <th scope="col" className="px-12 py-12">Phone Number</th>
                    <th scope="col" className="px-12 py-12">Documents</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor, index) => (
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-12 py-12 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-12 py-12">{doctor.first_name}</td>
                      <td className="whitespace-nowrap px-12 py-12">{doctor.last_name}</td>
                      <td className="whitespace-nowrap px-12 py-12">
                        {doctor.specialisation && doctor.specialisation.map((spec, idx) => (
                          <span key={idx}>{spec.name}</span>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-12 py-12">{doctor.email}</td>
                      <td className="whitespace-nowrap px-12 py-12">{doctor.phone_number}</td>
                      <td className="whitespace-nowrap px-12 py-12">
                    {doctor.doc_image && doctor.doc_image.map((documents, idx) => (
                      <div key={idx}>
                        {console.log(documents.experience_certificate, 'image')}
                        <img src={BaseUrl + documents.experience_certificate} alt="Experience Certificate" /><br />
                        <img src={documents.mbbs_certificate} alt="MBBS Certificate" />
                      </div>
                    ))}
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
  );
}

export default Doctors;
