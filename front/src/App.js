
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './patient/Home';
import PatientLogin from './patient/PatientLogin';
function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='login/' element={<PatientLogin/>}/>
    </Routes>
    </>
  );
}

export default App;
