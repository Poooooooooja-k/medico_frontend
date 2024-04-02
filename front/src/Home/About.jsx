import React from 'react';
import { FaVideo, FaComments, FaCalendarAlt, FaBrain } from 'react-icons/fa';
import HomeNavbar from './HomeNavbar';
const About= () => {
    const backgroundImageUrl = 'https://lh3.googleusercontent.com/proxy/FXTPqp1BfokDTthbVUjHUwJQ4jq56wKTDsq972ohfstxXIaFu1tqPgooN_WUt7Zyv6kicCvQQ4GIpWN3XNWV9CGa37Jx5qgQXJ6IPH5w4y4gIO6qkXT8nh4U6BQ-';
  return (
    
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <HomeNavbar/>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-black-800 mb-8">
          Welcome to Medico! We are dedicated to providing convenient
          and accessible healthcare services to our users.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ServiceCard
            title="Video Consultation"
            description="Connect with healthcare professionals through secure video calls from the comfort of your home. Receive medical advice, prescriptions, and more."
            icon="FaVide"
          />
          <ServiceCard
            title="Chat Consultation"
            description="Instantly chat with doctors for quick consultations. Get your questions answered, seek advice, and discuss your health concerns."
            icon="FaComments"
          />
          <ServiceCard
            title="Doctor Appointments"
            description="Easily schedule appointments with our network of qualified doctors and specialists. Choose your preferred time slot and receive reminders for your appointments."
            icon="FaCalendarAlt"
          />
          <ServiceCard
            title="AI Symptom Analysis"
            description="Use our AI-powered symptom checker to assess your health condition. Answer a series of questions and receive personalized recommendations."
            icon="FaBrain"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }) => {
    let IconComponent;
  
    switch (icon) {
      case 'FaVideo':
        IconComponent = FaVideo;
        break;
      case 'FaComments':
        IconComponent = FaComments;
        break;
      case 'FaCalendarAlt':
        IconComponent = FaCalendarAlt;
        break;
      case 'FaBrain':
        IconComponent = FaBrain;
        break;
      default:
        IconComponent = FaVideo; 
    }
  
    return (
      <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
        <div className="mr-4 text-indigo-600">
          <IconComponent size={32} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };

export default About;
