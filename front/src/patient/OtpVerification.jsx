import React, { useState } from 'react';
import { AxiosInstance } from "../components/AxiosInstance";
import { useNavigate, useLocation } from 'react-router-dom';

const OtpVerification = () => {
 const navigate = useNavigate();
 const [otp, setOtp] = useState('');
 const [error, setError] = useState('');
 const location = useLocation();

 const email = location.state?.email || '';

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post('patient/verifyotp/', {
        email: email,
        otp: otp,
      });

      if (response.status === 200) {
      
        alert('OTP verification successful');
        navigate('/');
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      setError('An error occurred while verifying the OTP');
    }
 };

 return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "https://thumbs.dreamstime.com/b/technology-innovation-medicine-concept-doctor-medical-network-connection-modern-virtual-screen-interfacein-hand-109191165.jpg"}}>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Enter Your OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-gray-700">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Verify</button>
        </form>
      </div>
    </div>
 );
};

export default OtpVerification;
