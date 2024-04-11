import React from 'react'
import { Link } from 'react-router-dom';
import { userLogout } from '../redux/slice/AuthSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ProfileSideBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
        dispatch(userLogout());
        navigate('/');
  };

  return (
    <div className="bg-gray-900 text-white h-screen w-64 rounded-r-lg">
      <div className="container mx-auto py-8 px-4">
        <div className="sidebar">
          <ul>
            <li><Link to="/doctor/docprofile" className="block py-2 px-4">Profile</Link></li>
            <li><Link to="" className="block py-2 px-4">Patients</Link></li>
            <li><Link to="/doctor/slotschedule" className="block py-2 px-4">Slot schedule</Link></li>
            <li><Link to="" className="block py-2 px-4">Appointments</Link></li>
            <li><Link to="/doctor/docblog" className="block py-2 px-4">Blog</Link></li>
            <li><Link to="" className="block py-2 px-4">Feedback</Link></li>
            <li><Link to="" className="block py-2 px-4">Wallet</Link></li>
            <li><button className='h-45 w-45 rounded-lg bg-red-700 ml-5 mt-3' onClick={handleLogout}>logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar
