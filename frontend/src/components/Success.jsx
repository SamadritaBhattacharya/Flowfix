import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {

  const navigate = useNavigate();

  return (
    <div className='text-white flex justify-center items-center mt-60'>
      <h1 className=''>
        Your Complaint is registered successfully.
      </h1>
      <button onClick={() => navigate("/")} className='p-1 border-1 rounded-3xl bg-green-600 w-20 ml-48  mt-2'>Go Back</button>  

    </div>
  )
}

export default Success