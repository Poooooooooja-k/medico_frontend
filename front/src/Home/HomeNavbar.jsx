import React, { useState } from 'react';
import medico_logo from '../resources/medico_logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle
  const [newIsOpen, setNewIsOpen] = useState(false); // State for login dropdown
  const login = useSelector(state => state.auth.isLogin);

  return (
    <nav className="bg-transparent shadow-md">
      <div className="container">
        {!login && (
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

        {login && (
          <div className="h-32 grid grid-cols-12">
            <div className="flex justify-start col-span-1">
              <img src={medico_logo} alt="Medico Logo" className="h-40 w-auto mr-25" />
              
            </div>
            <div className="hidden items-center justify-around col-span-11 md:flex">
              <Link to="/homepage" className="text-black">
                Home
              </Link>
              <Link to="/about" className="text-black">
                About
              </Link>
              <Link to="/patient/doctorlist" className="text-black">
                Doctors
              </Link>
              <Link to="/blog" className="text-black">
                Blog
              </Link>
              <Link to="/booking" className="text-black">
                Booking
              </Link>
              <Link to="/patient/Profile/" className="text-black">
                Profile
              </Link>
            </div>
            <div className="md:hidden flex justify-end items-center col-span-8">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                </svg>
              </button>
            </div>
            {isOpen &&(
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link to="/homepage" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              About
            </Link>
            <Link to="/doctors-appointments" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Appointments
            </Link>
            <Link to="/blog" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Blog
            </Link>
            <Link to="/booking" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Booking
            </Link>
            <Link to="patient/Profile/" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Profile
            </Link>
            </div>
            </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
