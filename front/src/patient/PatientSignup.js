import React, { useState } from 'react';
import { AxiosInstance } from "../components/AxiosInstance";
import { useNavigate } from 'react-router-dom';
import medico_logo from '../resources/medico_logo.png';
import { Link } from 'react-router-dom';


const PatientSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);



  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();
       try {
         const response = await AxiosInstance.post('/patient/patientsignup/', {
           first_name: firstName,
           last_name: lastName,
           age: age,
           place: place,
           phone_number: phoneNumber,
           email: email,
           password: password,
           confirm_password: password
        
         });
         setRegistrationStatus('success')
         alert('signup successful');
         navigate('/otp-verification', { state: { email: email } });
       } catch (error) {
         console.error("Error submitting signup:", error.response ? error.response.data : error);
         console.log(error)
         setRegistrationStatus('error');
       }
    
   };
   
  let statusMessage = null;
  if (registrationStatus === 'success') {
    statusMessage = <div>Registration successful! Please check your email to verify your account.</div>;
    setRegistrationStatus('');
  } else if (registrationStatus === 'error') {
    statusMessage = <div>Failed to register. Please try again.</div>;
    setRegistrationStatus('');
  }
  

  const ContinueWithGoogle = async ()=>{
    try{
      const response= await AxiosInstance.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000`)
      window.location.replace(response.data.authorization_url);
    }catch (error){

    }
  }









  return (
    <>
  <section className="h-full bg-neutral-200 light:bg-neutral-700">
  <div className="container h-full p-10">
    <div className="flex h-full items-center justify-center">
      <div className="w-full lg:w-10/12">
        <div className="block rounded-lg bg-white shadow-lg light:bg-neutral-800">
          <div className="lg:flex lg:flex-wrap">
            {/* Left column container */}
            <div className="w-full lg:w-6/12">
              <div className="mx-6 md:p-12">
                {/* Logo */}
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src={medico_logo}
                    alt="logo"
                  />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    We are The Medico Team
                  </h4>
                </div>
                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      value={firstName}
                      className="form-control"
                      placeholder="Enter your first name"
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={lastName}
                      className="form-control"
                      placeholder="Enter your last name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      className="form-control"
                      placeholder="Enter your email address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={phoneNumber}
                      className="form-control"
                      placeholder="Enter your phone number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={age}
                      className="form-control"
                      placeholder="Enter your age"
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={place}
                      className="form-control"
                      placeholder="Enter your place"
                      onChange={(e) => setPlace(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      value={password}
                      className="form-control"
                      placeholder="enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      value={confirmPassword}
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  {/* Submit button */}
                  <div className="text-center">
                    <button
                      className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                      style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                  {/* Register button */}
                  <div className="text-center">
                  <p className="mb-0">Have an account?<Link to="/patientlogin" style={{ color: 'blue' }}>login
                    </Link></p>
    </div>
    <div class="px-6 sm:px-0 max-w-sm ml-9">
    <button type="button" onClick={ContinueWithGoogle} class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Continue with Google<div></div></button>
   </div>
                  {statusMessage}
                </form>
              </div>
            </div>
            
            {/* Right column container with background and description */}
            <div
              className="hidden lg:block w-6/12 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-r-lg"
            >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-8 text-xl font-bold">
                  We are more than just an online consultation
                </h4>
                <p className="text-md">
  "Medico is a cutting-edge online medical consultation platform designed to provide accessible and convenient healthcare services to individuals worldwide.
  With a team of highly qualified and experienced healthcare professionals, including doctors, specialists, and therapists, Medico offers comprehensive virtual consultations tailored to meet the unique needs of each patient.

  Our platform prioritizes patient comfort and privacy, providing a secure and confidential environment for all consultations.
  Through user-friendly interfaces and state-of-the-art telemedicine technology, users can easily connect with healthcare providers from the comfort of their own homes or on-the-go, eliminating the need for traditional in-person visits.

  Medico covers a wide range of medical specialties, including primary care, mental health, dermatology, pediatrics, and more, ensuring that patients have access to the care they need, when they need it.
  Whether seeking medical advice, prescriptions, or ongoing treatment management, our platform empowers individuals to take control of their health journey with ease.

  Experience the future of healthcare with Medico – where quality care meets convenience, all at your fingertips."
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default PatientSignup;
