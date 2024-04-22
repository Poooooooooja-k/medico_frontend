import React from 'react'
import { AxiosInstance } from '../components/AxiosInstance';
import { useLocation } from 'react-router-dom';

const Payment = () =>{
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  


  return (
    <div>
      
    </div>
  )
}

export default Payment
