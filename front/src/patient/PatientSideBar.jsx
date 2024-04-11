import React from 'react'
import { Link } from 'react-router-dom';
import { userLogout } from '../redux/slice/AuthSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const PatientSideBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
};
  return (
    <div className="bg-blue-900 text-white h-screen w-64 rounded-r-lg">
      <div className="container mx-auto py-8 px-4">
        <div className="sidebar">
          <ul>
            <li><Link to="" className="block py-2 px-4">Profile</Link></li>
            <li><Link to="" className="block py-2 px-4">Appointments</Link></li>
            <li><Link to="" className="block py-2 px-4">Prescriptions</Link></li>
            <li><Link to="" className="block py-2 px-4">Wallet</Link></li>
            
            <button className="bg-red-500 text-white px-4 py-2 rounded font-semibold mb-4" onClick={handleLogout}>LOGOUT</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PatientSideBar
