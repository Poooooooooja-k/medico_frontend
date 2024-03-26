import React, { useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/slice/AuthSlice';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';


const PatientLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
    
  const dispatch=useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await AxiosInstance.post('patient/patientlogin/', {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response && response.data) {
        console.log(response.data);
        console.log(response.data.jwt);
        localStorage.setItem('token',response.data.jwt);
        dispatch(userLogin())
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
 return (
    <>
      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover"
            style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/06/12/89/52/360_F_612895290_5m4XeQsdmekGhrRlgId6HB3jfPkKvzwq.jpg')" }}>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                 <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                 <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div className="mt-8">
                <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
              </div>
              </form>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to='/patientsignup'>Signup</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
              
            </div>
          </div>
        </div>
    </>
 );
}

export default PatientLogin;
