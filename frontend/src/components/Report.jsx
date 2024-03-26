import React from 'react'
import { useNavigate } from 'react-router-dom'
//import formpic from '../assets/formpic.png'


const Report = () => {

    const navigate = useNavigate();

  return (
    <div className=' h-screen flex  bg-gray-900'>
        

        <form className=' m-6 ml-10 bg-white flex rounded-lg w-1/2 font-latoRegular'>
            <div className=' flex-1 text-gray-700 p-20'>
                <h1 className=' text-3xl pb-2 font-latoBold'>Report Problems</h1>
                <p className=' text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ab! Lorem ipsum dolor sit amet.

                </p>

                <div className=' mt-6'>
                    <div className='pb-2'>
                        <label className='block' htmlFor='username'>Name: </label>
                        <input className=' border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-50' type='text' name='username' placeholder='Enter your name: ' /> 
                    </div>
                    <div className='pb-2'>
                        <label className='block' htmlFor='contact'>Contact: </label>
                        <input className=' border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-50' type='phone' name='contact' placeholder='Enter your contact number: ' /> 
                    </div>
                    <div className='pb-2'>
                        <label className='block' htmlFor='address'>Address: </label>
                        <input className=' border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-50' type='text' name='address' placeholder='Enter your Address: ' /> 
                    </div>

                    <div className='pb-2'>
                        <label className=' font-latoBold text-sm pb-2' 
                            htmlFor='category'
                        >Problem Type: </label>
                        <select className=' ml-4 p-2 border-2 rounded-md bg-slate-100 font-semibold'>
                            <option>Leakage</option>
                            <option>Jammed</option>
                            <option>Drain overflow</option>
                            <option>others</option>
                        </select>
                    </div>
                    <div className='pb-2'>
                        <label htmlFor='description'>Description: </label>
                        <input className=' border-2 border-gray-500 p-2 rounded-md w-[600px] h-[80px] focus:border-teal-500 focus:ring-teal-50' type='text' name='username' placeholder='Enter your name: ' /> 
                    </div>
                    <div className='flex justify-center items-center'>
                      <button 
                        type='submit'
                        className='bg-teal-500   font-latoBold text-md text-white py-3 mt-[10px] rounded-full  w-[250px] hover:bg-cyan-200 hover:text-blue-950 hover:font-semibold'>
                            Submit
                        </button>

                        <button onClick={() => navigate("/")} className='p-1 border-1 rounded-3xl bg-slate-300 w-20 ml-48  mt-2'>Go Back</button>  

                    </div>

                    
                    

                </div>
            </div>

            {/* <div className=' flex-1'>
                <img src='../formpic.png' fill className=' mt-48 w-[400px]' /> 
            </div> */}

        </form>

         {/* <button onClick={() => navigate(-1)} className='p-1 border-1 rounded-3xl bg-slate-300 w-20 ml-48  mt-2'>Go Back</button>   */}


         <div className=' flex-1 ml-6'>
                <img src='../formpic.png' fill className=' mt-10 w-[600px]  object-cover rounded-lg ' /> 
            </div>

        
    </div>
  )
}

export default Report