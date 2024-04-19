
import './App.css';
import { Routes,Route } from 'react-router-dom';
import AdminRouter from './Router/Admin/AdminRouter';
import DoctorRoutes from './Router/Doctor/DoctorRoutes';
import PatientRoute from './Router/Patient/PatientRoute';
import Home from './patient/Home';
// import HomePage from './patient/HomePage';
function App() {
  return (
    <>
    <Routes>
     {/* <Route path='/' element={<HomePage/>}/> */}
     <Route path='/' element={<Home/>}></Route>
     <Route path='/doctor/*' element={<DoctorRoutes/>}></Route>
     <Route path='/patient/*' element={<PatientRoute/>}></Route>
     <Route path='/admin/*' element={<AdminRouter/>}></Route>
    </Routes> 
    </>
  );
}

export default App;
