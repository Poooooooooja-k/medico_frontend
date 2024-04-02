
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
import Blogpost from './admin/Blogpost';
import AdminViewBlog from './admin/AdminViewBlog';
import DocOtpVerification from './doctor/DocOtpVerification';
import Profile from './Home/Profile';
import About from './Home/About';
import AdminRouter from './Router/Admin/AdminRouter';
import Blog from './Home/Blog';
function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/doctorlogin' element={<DoctorLogin/>}/>
     <Route path='/patientlogin' element={<PatientLogin/>}/>
     <Route path='/patientsignup' element={<PatientSignup/>}/>
     <Route path='/login' element={<PatientLogin/>}/>
     <Route path='/homepage' element={<HomePage/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/adminlogin' element={<AdminLoginpage/>}/>
     {/* <Route path='/admindashboard' element={<AdminDashboard/>}/> */}
     <Route path='/adminpatients' element={<Patients/>}/>
     <Route path='/admindoctors' element={<Doctors/>}/>
     <Route path='/adminappointments' element={<Appointments/>}/>
     <Route path='/docotp-verification' element={<DocOtpVerification/>}/>
     <Route path='/otp-verification' element={<OtpVerification/>}/>
     <Route path='/doctorsignup' element={<DoctorSignup/>}/>
     <Route path='/doctorlogin' element={<DoctorLogin/>}/>
     <Route path='/adminspecializations' element={<Specialization/>}/>
     <Route path='/addblogpost' element={<Blogpost/>}/>
     <Route path='/adminviewblog' element={<AdminViewBlog/>}/>
     <Route path='/Profile' element={<Profile/>}/>
     <Route path='/blog' element={<Blog/>}/>








     <Route path='/admin/*' element={<AdminRouter/>}></Route>
    </Routes> 
    </>
  );
}

export default App;
