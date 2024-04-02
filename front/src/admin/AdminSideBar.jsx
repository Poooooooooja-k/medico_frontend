import React from 'react';
import { Link } from 'react-router-dom';
import medico from '../resources/medico_logo.png';
import { userLogout } from '../redux/slice/AuthSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../components/AxiosInstance';

const AdminSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    AxiosInstance.post('adminn/adminlogout/')
      .then(response => {
        dispatch(userLogout());
        navigate('/adminlogin');
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  };

  return (
    <div className="bg-gray-900 text-white h-screen w-64">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center mb-8">
          <img className="w-16 h-16" src={medico} alt="Icon" />
        </div>
        <div className="sidebar">
          <ul>
            <li><Link to="/admindashboard" className="block py-2 px-4">Dashboard</Link></li>
            <li><Link to="/adminpatients" className="block py-2 px-4">Patients</Link></li>
            <li><Link to="/admindoctors" className="block py-2 px-4">Doctors</Link></li>
            <li><Link to="/adminspecializations" className="block py-2 px-4">Specializations</Link></li>
            <li><Link to="/appointments" className="block py-2 px-4">Appointments</Link></li>
            <li><Link to="/addblogpost" className="block py-2 px-4">Blog</Link></li>
            <li><Link to="/feedback" className="block py-2 px-4">Feedback</Link></li>
            <li><Link to="/wallet" className="block py-2 px-4">Wallet</Link></li>
            <li><button className='h-45 w-45 rounded-lg bg-red-700 ml-5 mt-3' onClick={handleLogout}>logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
