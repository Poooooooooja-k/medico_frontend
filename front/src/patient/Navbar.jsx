import React, { useEffect, useState } from 'react';
import medico_logo from '../resources/medico_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle
  const [newIsOpen, setNewIsOpen] = useState(false); // State for login dropdown
  const login = useSelector(state => state.auth.isLogin);
  const doclogin=useSelector(state=>state.doctor_auth.docisLogin);
  const navigate=useNavigate()
  const role=localStorage.getItem('role')

  useEffect(()=>{
    if (role==='patient'){
      navigate('/patient/homepage/')
    }else if(role==='doctor'){
      navigate('/doctor/docDashboard')
    }else{
    }
  })

  return (
    <nav className="bg-transparent shadow-md">
      <div className="container">
        {!login && !doclogin && (
          <div className="flex justify-between">
            <img src={medico_logo} alt="Medico Logo" className="h-32 mr-24" />
            <div className="my-10">
              <Link to="/about" className="text-black mx-6">
                About
              </Link>
              <div className="relative inline-block text-left mx-10">
                <button
                  onClick={() => setNewIsOpen(!newIsOpen)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-100 shadow-sm px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                  Login
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {newIsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link to="/doctor/doctorlogin" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Login as Doctor?
                      </Link>
                      <Link to="/patient/patientlogin" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Login as Patient?
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                  Signup
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link to="doctor/doctorsignup/" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Signup as Doctor?
                      </Link>
                      <Link to="patient/patientsignup/" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Signup as Patient?
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
