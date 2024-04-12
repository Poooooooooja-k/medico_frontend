
import React, { useEffect, useState } from 'react';
import { AxiosInstance } from "../components/AxiosInstance";
import { useNavigate } from 'react-router-dom';
import medico_logo from '../resources/medico_logo.png';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const DoctorSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [experience,setExperience]=useState('')
  const [specialisation,setSpecialisation]=useState('')
  const [experienceCertificate,setExperienceCertificate]=useState('')
  const [mbbsCertificate,setmbbsCertificate]=useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);

  console.log(specialisation,"-------sec--------------")

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();

    
    // Password validation regex pattern
    const passwordRegex = /^.{6,}$/;

    // Validate all fields
    if (!firstName || !lastName || !email || !phoneNumber || !experience || !specialisation || !password || !confirmPassword) {
      setError('All fields are required');
   
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
 
      return;
    }

    // Validate password length
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters long');
  
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
   
      return;
    }

    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('phone_number', phoneNumber);
    formData.append('email', email);
    formData.append('exp', experience);
    formData.append('password', password);
    formData.append('confirm_password', confirmPassword);
    formData.append('experience_certificate', experienceCertificate);
    formData.append('mbbs_certificate', mbbsCertificate);
    formData.append('specialisation', specialisation);
    
    try {
       const response = await AxiosInstance.post('doctor/docsignup/', formData, {
         headers: {
           'Content-Type': 'multipart/form-data',
         },
       });
       setRegistrationStatus('success');
       toast('You have successfully signed up!!!,confirm otp')
       navigate('/doctor/docotp-verification/', { state: { email: email } });
    } catch (error) {
       console.error("Error submitting signup:", error.response ? error.response.data : error);
       toast.error('Error signing up!! Try again to Signup')
       console.log(error);
       setError(error)
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


  return (
    <>
  <section className="h-full bg-neutral-200 light:bg-neutral-700">
  <div className="container h-full p-10">
    <Toaster/>
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
                {/* Error message */}
                  {error && (
                    <div className="text-red-500 text-center mt-2">{error}</div>
                  )}
                {/* Form */}
                <form className="space-y-1" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
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
                      value={specialisation}
                      className="form-control"
                      placeholder="Enter your specialization"
                      onChange={(e) => setSpecialisation(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={experience}
                      className="form-control"
                      placeholder="years of experience"
                      onChange={(e) => setExperience(e.target.value)}
                      required
                    />

                   <label htmlFor="mbbsCertificate">MBBS Certificate</label>
                        <input
                        type="file"
                        id="mbbsCertificate"
                        className="form-control"
                        onChange={(e) => setmbbsCertificate(e.target.files[0])}
                        required
                    />

                    <label htmlFor="experienceCertificate">Experience Certificate</label>
                        <input
                        type="file"
                        id="experienceCertificate"
                        className="form-control"
                        onChange={(e) => setExperienceCertificate(e.target.files[0])}
                        required
                     />
                    <input
                      type="password"
                      value={password}
                      className="form-control"
                      placeholder="Create Password"
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

export default DoctorSignup;
