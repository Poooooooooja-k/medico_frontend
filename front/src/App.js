
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import About from './Home/About';
import AdminRouter from './Router/Admin/AdminRouter';
import Blog from './Home/Blog';
import DoctorRoutes from './Router/Doctor/DoctorRoutes';
import PatientRoute from './Router/Patient/PatientRoute';
function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/homepage' element={<HomePage/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/blog' element={<Blog/>}/>

     
     <Route path='/doctor/*' element={<DoctorRoutes/>}></Route>
     <Route path='/patient/*' element={<PatientRoute/>}></Route>
     <Route path='/admin/*' element={<AdminRouter/>}></Route>
    </Routes> 
    </>
  );
}

export default App;
