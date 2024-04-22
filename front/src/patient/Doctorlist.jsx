import React, { useEffect, useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import HomeNavbar from './HomeNavbar';
import { useNavigate } from 'react-router-dom';
import querystring from 'query-string'


const DoctorCard = ({ doctor ,handleBookAppointment}) => {
    const bookAppointment = (doctorId) => {
        console.log(doctorId, "---docid---------");
        handleBookAppointment(doctorId);
    };
    console.log("Doctor object:", doctor); // Log the doctor object
    console.log("handleBookAppointment function:", handleBookAppointment); // Log the handleBookAppointment function

    return (
      <>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img className="w-full h-64 object-cover" src={doctor.profile_image} alt="Doctor" />
              <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{doctor.first_name} {doctor.last_name}</div>
                  <p className="text-gray-700 text-base mb-2">{doctor.specialisation}</p>
                  <p className="text-gray-700 text-base mb-2">Experience: {doctor.exp} years</p>
                  <p className="text-gray-700 text-base mb-2">Consultation fee: {doctor.consultation_fee}</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => bookAppointment(doctor.id)}>
                      Book Appointment
                  </button>
              </div>
          </div>
        </div>
      </>
    );
}

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    const handleBookAppointment = (doctorId) => {
        const data={
            doctor_id:doctorId
        }
        const queryStringData=querystring.stringify(data)
        navigate(`/patient/docslot?${queryStringData}`); 
    };
    
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await AxiosInstance.get('patient/listdoctors/');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        fetchDoctors();
    }, []);

    return (
      <>
        <HomeNavbar />
        <div className='relative h-auto w-screen'>
            <img className='' src='https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/healthcare/solution/AdobeStock_103968342-Web-3840x1512.jpg' alt='doc-banner1'/>
            <h1 className='text-white absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl mb-36 font-bold'>
                Finding Your Ideal Healthcare Companion: <br/> The Best Doctors for You
            </h1>
        </div>
        <div className="flex flex-wrap justify-center">
            {doctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} handleBookAppointment={handleBookAppointment} />
            ))}
        </div>
      </>
    );
}
export default DoctorList;
