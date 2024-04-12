import React, { useEffect, useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import AdminSideBar from './AdminSideBar';
import { BaseUrl } from '../components/BaseUrl';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1); // Set the number of items per page
  const [filter,setFilter]=useState('all')

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredDoctors.length / itemsPerPage)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
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

  const ApproveDoc = async (email) => {
    try {
      const response = await AxiosInstance.post('adminn/doctorverify/', { email });
      console.log('Doctor approved successfully:', response.data);
      alert('Doctor account approved succesfullyy!!')
      return response.data; 
    } catch (error) {
      console.error('Error approving doctor:', error);  
    }
  };

  const RejectDoc = async (email) => {
    try {
      const response = await AxiosInstance.post('adminn/rejectdoctor/', { email });
      console.log('Doctor rejected successfully:', response.data);
      console.log(response,"----------------")
      alert('Doctor rejected successfully');
      return response.data;
  
    } catch (error) {
      console.error('Error rejecting doctor:', error);
      
    }
  };

  // filter options
  const filteredDoctors=doctors.filter(doctor=>{
    if (filter==='approved')return doctor.is_approved;
    if (filter==='rejected')return doctor.is_rejected;
    if (filter==='pending')return !doctor.is_approved && !doctor.is_rejected;
    return true;   // Default: show all doctors

  })

    
  // Logic to get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstItem, indexOfLastItem);

  const openFullscreen = (event) => {
    if (event.target.requestFullscreen) {
      event.target.requestFullscreen();
 };
}


  return (
    <div className="flex">
      <AdminSideBar />
      <div className="flex flex-col overflow-x-auto">
        <h1 className="text-center font-bold text-red-500 mt-4">Doctors</h1>
        <div className="flex justify-center my-4">
          <button onClick={prevPage} disabled={currentPage === 1} className="mx-2 px-4 py-2 border rounded">
            Previous
          </button>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredDoctors.length / itemsPerPage)} className="mx-2 px-4 py-2 border rounded">
            Next
          </button>
        </div>
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
                {currentDoctors.map((doctor, index) => (
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
                                      <img src={BaseUrl + documents.experience_certificate} alt="Experience Certificate" className="h-20 w-30" onClick={openFullscreen} /><br />
                                      <img src={BaseUrl + documents.mbbs_certificate} alt="MBBS Certificate" className="h-20 w-30" onClick={openFullscreen} />
                                      {!doctor.is_approved && !doctor.is_rejected && (
                                          <>
                                            <button className="bg-green-500 text-white ml-10 md:ml-2 h-9 px-4 py-2 rounded" onClick={() => ApproveDoc(doctor.email)}>Approve</button>
                                            <button className="bg-red-500 text-white ml-10 md:ml-2 h-9 px-4 py-2 rounded" onClick={() => RejectDoc(doctor.email)}>Reject</button>
                                          </>
                                      )}
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
        {/* Filter buttons */}
        <div className="flex justify-center my-4">
          <button onClick={() => setFilter('all')} className="mx-2 px-4 py-2 border rounded">All</button>
          <button onClick={() => setFilter('approved')} className="mx-2 px-4 py-2 border rounded">Approved</button>
          <button onClick={() => setFilter('rejected')} className="mx-2 px-4 py-2 border rounded">Rejected</button>
          <button onClick={() => setFilter('pending')} className="mx-2 px-4 py-2 border rounded">Pending</button>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
