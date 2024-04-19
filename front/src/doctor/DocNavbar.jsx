import React, { useState } from 'react';
import medico_logo from '../resources/medico_logo.png';
import { Link } from 'react-router-dom';

const DocNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state variable

  return (
    <div className="h-32 grid grid-cols-12">
      <div className="flex justify-start col-span-4">
        <img src={medico_logo} alt="Medico Logo" className="h-40 w-auto mr-25" />
      </div>
      <div className="hidden items-center justify-around col-span-8 md:flex">
        <Link to="/doctor/docDashboard" className="text-black">Home</Link>
        <Link to="/doctor/docabout" className="text-black">About</Link>
        <Link to="/doctor/blogg" className="text-black">Blog</Link>
        <Link to="/doctor/booking" className="text-black">Chats</Link>
        <Link to="/doctor/docprofile" className="text-black">Profile</Link>
      </div>
      <div className="md:hidden flex justify-end items-center col-span-8">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to="/homepage" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Home
            </Link>
            <Link to="doctor/docabout" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              About
            </Link>
            <Link to="" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Doctors
            </Link>
            <Link to="/doctor/blogg" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Blog
            </Link>
            <Link to="/booking" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Chats
            </Link>
            <Link to="/doctor/docprofile" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default DocNavbar;
