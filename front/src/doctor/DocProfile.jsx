import React, { useEffect, useState } from 'react'
import ProfileSideBar from './ProfileSideBar'
import { AxiosInstance } from '../components/AxiosInstance'
import DocNavbar from './DocNavbar'
import { BaseUrl } from '../components/BaseUrl'
import toast from 'react-hot-toast';

const DocProfile = () => {
    const[doctor,setDoctor]=useState(null)
    const[error,setError]=useState(null)
    const[image,setImage]=useState(null)
    const [updated,setUpdated]=useState(false)

    useEffect(()=>{
        AxiosInstance.get('doctor/docprofile/').then(response=>{
            setDoctor(response.data)
            console.log(response.data,"---------------------")
            setImage(BaseUrl+response.data.profile_image);
        }).catch(error=>{
            alert(error)
            setError(error)
        })
    },[updated])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error('Please select an image!');
            return;
        }
        const formData = new FormData();
        formData.append('profile_image', image);
        try {
            const response = await AxiosInstance.put(
                'doctor/profileimage/',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (response.status === 200) {
                toast.success('Profile image updated!');
                setImage(response.data.profile_image_url);
                setUpdated(!updated)
            } else {
                toast.error('Error updating profile image!');
                console.error(response.data);
              
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred!');
        }
    };
   

  return (
    <>
    <DocNavbar/>
    <div className=' flex '>
        
        <ProfileSideBar/>
        
        <div className='flex justify-center mx-auto'>
        {error && <p>Error: {error.message}</p>}
        {doctor && (
        <div className="max-w-lg mx-auto h-[500px] bg-white shadow-md rounded-lg overflow-hidden flex justify-center">
        <div className="p-6">
        
        <form onSubmit={handleSubmit}>
    <div style={{ backgroundImage: `url(${image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat' }} className="border-3 rounded-full w-[150px] h-[150px] border text-center">
        <div className=' w-[150px] h-[150px] cursor-pointer rounded-full backdrop-blur-sm opacity-0 hover:opacity-100 flex justify-center items-center'>
            <p className="text-white text-sm">Change Profile</p>
            <input type='file' name='profile_image' className='' onChange={(e) => setImage(e.target.files[0])}/>
        </div>
    </div>
    <button className='bg-green-500 rounded-md my-4' type="submit">Upload Profile Image</button>
</form>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">{doctor.first_name} {doctor.last_name}</h2>
          <p className="text-gray-600 mb-4">{doctor.specialisation}</p>
          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-700"><span className="font-semibold">Email:</span> {doctor.email}</p>
            <p className="text-gray-700"><span className="font-semibold">Phone Number:</span> {doctor.phone_number}</p>
            <p className="text-gray-700"><span className="font-semibold">Experience:</span> {doctor.exp} years</p>
          </div>
        </div>
      </div>
)}
        </div>
    </div>
    </>
  )
}

export default DocProfile
