import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../components/AxiosInstance';
import HomeNavbar from './HomeNavbar';

const Payment = () => {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const { doctor_id, amount, patient_name, date } = queryParams;
    const [data, setData] = useState(null);

    // Function to handle payment confirmation
    const handlePaymentConfirmation = async () => {
        try {
            // POST request to your backend endpoint to initiate payment
            const response = await AxiosInstance.post('patient/payment/', {
                doctor_id: doctor_id,
                amount: amount,
                consultation_date: date
            });
            
            // Handle successful payment initiation, you may redirect user to the payment gateway here
            console.log('Payment initiation response:', response.data);
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    useEffect(() => {
        AxiosInstance.post('patient/getdata/', {
            doctor_id: doctor_id
        })
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [doctor_id]);

    return (
        <>
            <HomeNavbar />
            <div className="container mx-auto">
                <div className="mt-32">
                    {data && (
                        <>
                            <h1 className="text-3xl font-bold mb-4">Confirm Your Booking</h1>
                            <div className="bg-gray-100 p-4 rounded-md">
                            <p className="text-lg font-bold">Doctor's Name: <span className="font-normal text-gray-800">{data.doctor && data.doctor.first_name}</span></p>
                            <p className="text-lg font-bold">Amount: <span className="font-normal text-green-600">₹ {amount}</span></p>
                            <p className="text-lg font-bold">Patient Name: <span className="font-normal text-gray-800">{data.patient && data.patient.first_name}</span></p>
                            <p className="text-lg font-bold">Date: <span className="font-normal text-gray-800"> {date}</span></p>

                            </div>
                            <button
                                onClick={handlePaymentConfirmation}
                                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Confirm Payment
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Payment;
