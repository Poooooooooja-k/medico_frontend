import React from 'react';
import { Link } from 'react-router-dom';
import medico from '../resources/medico_logo.png';
import { AdminLogout } from '../redux/slice/AdminSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AdminSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
        dispatch(AdminLogout());
        navigate('/admin/adminlogin');
  }

  return (
    <div className="bg-gray-900 text-white h-screen w-64">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center mb-8">
          <img className="w-auto h-32" src={medico} alt="Icon" />
        </div>
        <div className="sidebar">
          <ul>
            <li><Link to="/admin/admindashboard" className="block py-2 px-4">Dashboard</Link></li>
            <li><Link to="/admin/adminpatients" className="block py-2 px-4">Patients</Link></li>
            <li><Link to="/admin/admindoctors" className="block py-2 px-4">Doctors</Link></li>
            <li><Link to="/admin/adminspecializations" className="block py-2 px-4">Specializations</Link></li>
            <li><Link to="/admin/appointments" className="block py-2 px-4">Appointments</Link></li>
            <li><Link to="/admin/addblogpost" className="block py-2 px-4">Blog</Link></li>
            <li><Link to="/admin/feedback" className="block py-2 px-4">Feedback</Link></li>
            <li><Link to="/admin/wallet" className="block py-2 px-4">Wallet</Link></li>
            <li><button className='h-45 w-45 rounded-lg bg-red-700 ml-5 mt-3' onClick={handleLogout}>logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
