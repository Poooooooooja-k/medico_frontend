import React from 'react'
import {Link} from 'react-router-dom'
import './adminSideBar.css'
import medico from '../resources/medico_logo.png';
const AdminSideBar = () => {
  return (
    <>
    <div className='container'>
    <div className="icon">
      <img className='icon-img' src={medico} alt="Icon" />
    </div>
    <div className='sidebar'>
        <ul>
        <li><Link to="">Dashboard</Link></li>
        <li><Link to="">Patients</Link></li>
        <li><Link to="">Doctors</Link></li>
        <li><Link to="">Appointments</Link></li>
        <li><Link to="">Blog</Link></li>
        <li><Link to="">Feedback</Link></li>
        <li><Link to="">Wallet</Link></li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default AdminSideBar
