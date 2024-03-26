import React from 'react';
import HomeNavbar from './HomeNavbar';
import { userLogout } from '../redux/slice/AuthSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../components/AxiosInstance';

const HomePage = (userId) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserLogout = () => {
    AxiosInstance.post(`patient/patientlogout/`)
      .then(response => {
        dispatch(userLogout());
        navigate('/patientlogin');
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  };

  return (
    <div>
      <HomeNavbar />
      <h1>Home Page</h1>
      <button className='btn-primary' onClick={handleUserLogout}>LOGOUT</button>
    </div>
  );
}

export default HomePage;
