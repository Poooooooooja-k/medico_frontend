
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import AdminDashboard from './admin/AdminDashboard';
import AdminLoginpage from './admin/AdminLoginpage';
import Doctors from './admin/Doctors';
import Appointments from './admin/Appointments';
import OtpVerification from './patient/OtpVerification';
import PatientLogin from './patient/PatientLogin';
import PatientSignup from './patient/PatientSignup';
import DoctorLogin from './doctor/DoctorLogin';
import DoctorSignup from './doctor/DoctorSignup';
import Patients from './admin/Patients';
import Specialization from './admin/Specialization';
import DocOtpVerification from './doctor/DocOtpVerification';
function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/doctorlogin' element={<DoctorLogin/>}/>
     <Route path='/patientlogin' element={<PatientLogin/>}/>
     <Route path='/patientsignup' element={<PatientSignup/>}/>
     <Route path='/login' element={<PatientLogin/>}/>
     <Route path='/adminlogin' element={<AdminLoginpage/>}/>
     <Route path='/admindashboard' element={<AdminDashboard/>}/>
     <Route path='/adminpatients' element={<Patients/>}/>
     <Route path='/admindoctors' element={<Doctors/>}/>
     <Route path='/adminappointments' element={<Appointments/>}/>
     <Route path='/docotp-verification' element={<DocOtpVerification/>}/>
     <Route path='/otp-verification' element={<OtpVerification/>}/>
     <Route path='/doctorsignup' element={<DoctorSignup/>}/>
     <Route path='/doctorlogin' element={<DoctorLogin/>}/>
     <Route path='/adminspecializations' element={<Specialization/>}/>
    </Routes> 
    </>
  );
}

export default App;
