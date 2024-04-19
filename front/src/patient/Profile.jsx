import React, { useState, useEffect } from 'react';
import HomeNavbar from './HomeNavbar';
import { AxiosInstance } from '../components/AxiosInstance';
import PatientSideBar from './PatientSideBar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);
    const isLogin=useSelector(state=>state.auth.isLogin)
    console.log(isLogin,"-----------login--------")
    const navigate=useNavigate()

    useEffect(() => {
        if (!isLogin){
            navigate('/patient/patientlogin')
            return 
        }
        const fetchProfileData = async () => {
            try {
                const response = await AxiosInstance.get('patient/userprofile/');
                setProfileData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchProfileData();
    }, []);

    if (error) {
      return <div>Error: {error.message}</div>;
  }
    return (
        <>
            <div className="bg-gray-100 ">
                <HomeNavbar />
                <div className='grid grid-cols-12'>
                  <div className='col-span-2'>

                <PatientSideBar/>
                  </div>
                <div className="col-span-10 flex justify-center max-w-3xl h-1/2 mt-28  mx-auto bg-white rounded shadow-lg">
                 <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                     <dl className="sm:divide-y sm:divide-gray-200">
                         {profileData && (
                             <>
                                 <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                     <dt className="text-sm font-medium text-gray-500">
                                         First name
                                     </dt>
                                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                         {profileData.first_name}
                                     </dd>
                                 </div>
                                 <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                     <dt className="text-sm font-medium text-gray-500">
                                         Last name
                                     </dt>
                                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                         {profileData.last_name} 
                                     </dd>
                                 </div>
                                 <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                     <dt className="text-sm font-medium text-gray-500">
                                         Email address
                                     </dt>
                                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                         {profileData.email}
                                     </dd>
                                 </div>
                                 <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                     <dt className="text-sm font-medium text-gray-500">
                                         Phone number
                                     </dt>
                                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                         {profileData.phone_number}
                                     </dd>
                                 </div>
                                 <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                     <dt className="text-sm font-medium text-gray-500">
                                         Place
                                     </dt>
                                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                         {profileData.place}
                                     </dd>
                                 </div>
                                 <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                     <dt className="text-sm font-medium text-gray-500">
                                         Age
                                     </dt>
                                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                         {profileData.age}
                                     </dd>
                                 </div>
                             </>
                         )}
                     </dl>
                 </div>
             </div>
                </div>
                
                </div>
        </>
    );
}

export default Profile;
