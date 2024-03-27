import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Signup = () => {

    const [username,setName] = useState()
    const [aadhar,setAadhar] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/user/register', {username,aadhar,email,password})
        .then(result => {console.log(result)
            navigate('/login')
        })
    .catch(err => console.log(err))
    }

  return (
    <div className='flex justify-center items-center  bg-gradient-to-r from-green-200 to-emerald-800 h-screen'>
        <div className='bg-gradient-to-r from-teal-300 to-teal-900 p-3 border-spacing-2 shadow-[0px_9px_21px_5px_#c6f6d5] w-[800px] h-[500px] '>
            <h2 className='flex justify-center items-center mt-8 mb-12 font-serif font-semibold text-gray-100 text-[30px]'>REGISTER</h2>
            <form onSubmit={handleSubmit} className=' ml-[100px]'>
                <div className='mb-2 ml-[100px] p-3  items-center text-gray-300 '>
                    <label htmlFor='email'>
                        <strong>Name: </strong>
                    </label>
                    <input 
                        type='text'
                        placeholder='Enter Name'
                        autoComplete='off'
                        name='username'
                        className='  text-black rounded-lg ml-10 hover:p-1 hover:bg-slate-400'
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='mb-2 ml-[100px] p-3  items-center text-gray-300 '>
                    <label htmlFor='email'>
                        <strong>Aadhar: </strong>
                    </label>
                    <input 
                        type='text'
                        placeholder='Enter Aadhar number'
                        autoComplete='off'
                        name='aadhar'
                        className='text-black rounded-lg ml-8 hover:p-1 hover:bg-slate-400'
                        onChange={(e) => setAadhar(e.target.value)} />
                </div>
                <div className='mb-2 ml-[100px] p-3  items-center text-gray-300 '>
                    <label htmlFor='email'>
                        <strong>Email: </strong>
                    </label>
                    <input 
                        type='text'
                        placeholder='Email'
                        autoComplete='off'
                        name='email'
                        className='text-black rounded-lg ml-10 hover:p-1 hover:bg-slate-400'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-2  ml-[100px] p-3 text-gray-300'>
                    <label htmlFor='password'>
                        <strong>Password: </strong>
                    </label>
                    <input 
                        type='password'
                        placeholder='Enter Password'
                        name='password'
                        className='text-black rounded-lg ml-2 hover:p-1 hover:bg-slate-400' 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className=' flex justify-center items-center p-4'>
                   <button type='submit' className=' mt-10 mb-6 p-4 border w-40 bg-teal-800 rounded-3xl font-semibold text-gray-200 hover:bg-blue-200 hover:text-cyan-600'>
                        Register
                    </button> 
                </div>
              </form>  
                <p className=' mt-30 ml-8 flex justify-center items-center text-green-300'>Already have an Account?</p>
                <Link to={"/login"} className=' ml-[350px] p-1 hover:bg-slate-500 hover:text-white font-mono font-bold flex justify-center items-center border w-40 bg-blend-lighten rounded'>
                    Login
                </Link>
            
        </div>

    </div>
  )
}

export default Signup