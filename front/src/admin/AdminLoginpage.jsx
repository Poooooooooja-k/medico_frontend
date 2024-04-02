import React, { useEffect, useState } from 'react'
import './AdminLoginpage.css';
import { useNavigate } from 'react-router-dom'
import { AxiosInstance } from '../components/AxiosInstance'
import medico from '../resources/medico_logo.png';
import { userLogin } from '../redux/slice/AuthSlice';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';



const AdminLoginpage = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const user=useSelector((state)=>state.auth.isLogin)
    const navigate=useNavigate()
    const dispatch=useDispatch()
  
    useEffect(()=>{
      if (user){
        navigate('/admin/admindashboard/')
      }
    })

    const handleSubmit= async (e)=>{
        e.preventDefault();
          await AxiosInstance.post('/adminn/adminlogin/',{
          email:username,
          password:password
        })
      .then(response => {
        dispatch(userLogin());
        navigate('/admin/admindashboard');
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
     }

  return (
    <>
    <div className="login-page">
    <div className="container flex justify-center items-center my-5 p-3">
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="text-center my-5">
        <div className="icon">
          <img className="icon-img1" src={medico} alt="Icon" />
        </div>
        <h1 className="login-text font-bold text-3xl mt-6">Login</h1>
      </div>
      <div className="mb-4">
        <input
          value={username}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder='Enter your username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Enter your password'
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
   </div>
  </div>
    </>
  )
}

export default AdminLoginpage
