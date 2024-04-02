import React, { useState } from 'react';
import medico_logo from '../resources/medico_logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newIsOpen, setNewIsOpen] = useState(false);
  const login = useSelector(state => state.auth.isLogin);

  return (
    <nav className="bg-transparent p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {!login && (
          <div>
            <div className="flex items-center">
              <img src={medico_logo} alt="Medico Logo" className="h-28 w-auto mr-10" />
              <a href="#home" className="text-black fs-10 font-bold">Medico</a>
            </div>

            <div className="flex items-center">
              <Link to='/about' className="text-black mx-6">About</Link>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setNewIsOpen(!newIsOpen)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-100 shadow-sm px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                  Login
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {newIsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link to="/doctorlogin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Login as Doctor?</Link>
                      <Link to="/patientlogin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Login as Patient?</Link>
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
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link to="/doctorsignup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Signup as Doctor?</Link>
                      <Link to="/patientsignup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Signup as Patient?</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {login && (
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={medico_logo} alt="Medico Logo" className="h-28 w-auto mr-15" />
              <a href="#home" className="text-black fs-15 font-bold mr-15">Medico</a>
            </div>
            <Link to="/homepage" className="text-black mx-10">Home</Link>
            <Link to="/about" className="text-black mx-10">About</Link>
            <Link to="/doctors-appointments" className="text-black mx-10">Appointments</Link>
            <Link to="/blog" className="text-black mx-10">Blog</Link>
            <Link to="/booking" className="text-black mx-10">Booking</Link>
            <Link to="/Profile" className="text-black mx-10">Profile</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
