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
    if (password === confirmPassword) {
       try {
         const response = await AxiosInstance.post('/patient/patientsignup/', {
           first_name: firstName,
           last_name: lastName,
           email: email,
           age: age,
           place: place,
           phone_number: phoneNumber,
           password: password,
           role: "patient"
         });
         setRegistrationStatus('success');
         alert('signup successful');
         navigate('/otp-verification', { state: { email: email } });
       } catch (error) {
         console.error("Error submitting signup:", error.response ? error.response.data : error);
         setRegistrationStatus('error');
       }
    } else {
       setError('Passwords do not match');
    }
   };
   
  let statusMessage = null;
  if (registrationStatus === 'success') {
    statusMessage = <div>Registration successful! Please check your email to verify your account.</div>;
  } else if (registrationStatus === 'error') {
    statusMessage = <div>Failed to register. Please try again.</div>;
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
                  <p className="mb-4">Please register an account</p>
               
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
      <p className="mb-0">Have an account?</p>
      <Link to="/patientlogin">
        <button
          type="button"
          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          Login
        </button>
      </Link>
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
