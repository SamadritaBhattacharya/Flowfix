import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {

    const [username,setName] = useState()
    // const [aadhar,setAadhar] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/user/login', {username,email,password})
        .then(result => {
          console.log(result)
          if(result.data === "Success"){
            navigate('/profile')
            console.log("logged in success")
          }
            
        })
    .catch(err => console.log(err))
    }

  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-slate-800 via-stone-700 to-stone-900 h-[700px]'>
        <div className='bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 p-3 border-spacing-2 shadow-[0px_9px_21px_5px_#c6f6d5] w-[800px] h-[500px] '>
            <h2 className='flex justify-center items-center mt-8 mb-12 font-serif font-semibold text-gray-100 text-[30px]'>LOGIN</h2>
            <form onSubmit={handleSubmit} className=' ml-[100px]'>
                
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
                <div className='mb-2 ml-[100px] p-3  items-center text-gray-300 '>
                    <label htmlFor='username'>
                        <strong>Name: </strong>
                    </label>
                    <input 
                        type='text'
                        placeholder='username'
                        autoComplete='off'
                        name='username'
                        className='text-black rounded-lg ml-10 hover:p-1 hover:bg-slate-400'
                        onChange={(e) => setName(e.target.value)} />
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
                   <button type='submit' className=' mt-[100px] mb-20 p-4 border w-40 bg-slate-500 rounded-3xl font-semibold text-gray-200 hover:bg-blue-200 hover:text-cyan-600'>
                        Login
                    </button> 
                </div>
              </form>  
                <p className=' mt-2 ml-16 flex justify-center items-center text-green-300'>Create new Account</p>
                <Link to={"/register"} className=' ml-[350px] p-1 hover:bg-slate-500 hover:text-white font-mono font-bold flex justify-center items-center border w-40 bg-blend-lighten rounded'>
                    Signup
                </Link>
            
        </div>

    </div>
  )
}

export default Login