import React, { useEffect, useState } from 'react';
import ProfileSideBar from './ProfileSideBar';
import { AxiosInstance } from '../components/AxiosInstance';
import DocNavbar from './DocNavbar';
import { BaseUrl } from '../components/BaseUrl';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import doctor_image from '../resources/doctor_image.jpeg'

const DocProfile = () => {
    const [doctor, setDoctor] = useState(null);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [updated, setUpdated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [consultationFee, setConsultationFee] = useState('');
    const [documents, setDocuments] = useState([]);
    const navigate=useNavigate()
    const doc_isLogin=useSelector(state=>state.doctor_auth.docisLogin)
    console.log(doc_isLogin,"------doclogin-")

     useEffect(() => {
        if (doc_isLogin){
            AxiosInstance.get('doctor/docprofile/')
            .then(response => {
                setDoctor(response.data);
                setImage(BaseUrl + response.data.profile_image);
                // Fetch doctor's documents
                AxiosInstance.get('doctor/getdocdocuments/')
                    .then(response => {
                        console.log(response.data,"------response-----------")
                        setDocuments(response.data);
                    })
                    .catch(Error => {
                        console.error("Error fetching documents:", Error);
                    });
            })
            .catch(error => {
                alert(error);
                setError(error);
            });
        }else{
            navigate('/doctor/doctorlogin')
            return

        }
      
    }, [updated]);

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
                setUpdated(!updated);
            } else {
                toast.error('Error updating profile image!');
                console.error(response.data);
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred!');
        }
    };

    const handleConsultationFeeSubmit = async () => {
        try {
            const response = await AxiosInstance.post('doctor/addfee/', { consultation_fee: consultationFee });

            if (response.status === 201) {
                toast.success('Consultation fee fixed successfully!');
                setShowModal(false); // Close the modal after successful submission
            } else {
                toast.error('Error fixing consultation fee!');
                console.error(response.data);
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred!');
        }
    };

    const openFullscreen = (event) => {
        if (event.target.requestFullscreen) {
          event.target.requestFullscreen();
     };
    }
    
    
    return (
        <>
            <DocNavbar />
            <div className='flex'>
                <ProfileSideBar />
                <div className='flex justify-center mx-auto'>
                    {error && <p>Error: {error.message}</p>}
                    {doctor && (
                        <div className="max-w-xl mx-auto h-[600px] bg-white shadow-md rounded-lg overflow-hidden flex justify-center">
                            <div className="p-6">
                                <form onSubmit={handleSubmit}>
                                <div style={{ backgroundImage: `url(${image ||doctor_image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="border-3 rounded-full w-[150px] h-[150px] border text-center">
                                        <div className=' w-[150px] h-[150px] cursor-pointer rounded-full backdrop-blur-sm opacity-0 hover:opacity-100 flex justify-center items-center'>
                                            <p className="text-white text-sm">Change Profile</p>
                                            <input type='file' name='profile_image' className='' onChange={(e) => setImage(e.target.files[0])} />
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
                                    <p className="text-gray-700"><span className="font-semibold">Consultation Fee: </span> {doctor.consultation_fee}/-</p>
                                     {/* Display doctor's documents */}
                                 {documents.map((document, index) => (
                                    <div key={index} className="flex items-center">
                                        <p className="text-gray-700 mr-2">Experience Certificate:</p>
                                        <img src={BaseUrl + document.experience_certificate} alt='experience certificate' className="w-20 h-20" onClick={openFullscreen} />
                                        <br/>
                                        <p className="text-gray-700 mr-2">MBBS Certificate:</p>
                                        <img src={BaseUrl + document.mbbs_certificate} alt='MBBS certificate' className="w-20 h-20" onClick={openFullscreen}/>
                                    </div>
                                ))}
                                    <button className="flex bg-pink-400 text-white active:bg-pink-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-pink-600 focus:outline-none ease-linear transition-all duration-150 mx-auto mt-5" type="button" onClick={() => setShowModal(true)}>Fix your Consultation fee</button>
                                </div>
                                
                                </div>
                        </div>
                    )}
                </div>
            </div>
            {/* modal for consultation */}
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-gray-600">
                                        Fix your Consultation fee
                                    </h3>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-500 text-lg leading-relaxed ">
                                        After each consultation, Medico deducts 30% of your consultation fee as its service charge. This deduction ensures the smooth operation and maintenance of our platform, allowing us to continue providing high-quality services to both doctors and patients. The remaining 70% of your consultation fee will be promptly credited to your account, ensuring that you receive fair compensation for your expertise and time.
                                    </p>
                                </div>
                                <div className="w-96 bg-white p-4 rounded-lg shadow-md">
                                    <form onSubmit={handleConsultationFeeSubmit} className="flex items-center">
                                        <label className="bg-blue-900 text-white font-normal px-4 py-2 rounded-md mr-3">Add Consultation Fee</label>
                                        <input type="text" value={consultationFee} onChange={(e) => setConsultationFee(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Enter consultation fee" />
                                      
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" onClick={handleConsultationFeeSubmit}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default DocProfile;
