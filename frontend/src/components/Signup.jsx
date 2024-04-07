import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    aadhar: "",
    email: "",
    password: "",
   
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/register", formData)
      .then((result) => {
        console.log(result);
        navigate("/report");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen gap-3"
        style={{ position: "relative" }}
      >
        <img
          src="../formpic.png"
          alt="DOC"
          className="h-screen rounded-xl shadow-sky-600 shadow-md"
          style={{
            filter: "blur(5px) brightness(0.4)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            width:'1000px',
            height:'580px',
          }}
        />
        <img
          src="../formpic.png"
          alt="DOC"
          className="h-2/3 rounded-xl shadow-sky-600 shadow-md"
        />

        <div className="bg-lblack h-2/3 w-1/4 rounded-xl shadow-sky-600 shadow-md ">
          <div className="flex items-center ml-2 mt-3">
            <img src="../flulogo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
            <Link to="/" className="ml-2 font-semibold text-white">
              FLUXION &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; <strong>SignUp</strong>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="px-4 py-2">
            <div className="mt-4">
              <label htmlFor="username" className="block text-sky-300">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="w-full pr-2">
                <label htmlFor="age" className="block text-sky-300">
                  Aadhar:
                </label>
                <input
                  type="number"
                  id="aadhar"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 w-full text-green-800"
                />
              </div>
             
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sky-300">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sky-300">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-md px-2 py-1 w-full text-green-800"
              />
            </div>
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-800 mt-3"
              >
                SignUp
              </button>
            </div>
            <div className=" text-gray-200  flex justify-center items-center  lg:mt-1 hover:text-sky-500">
           
              
            
            <Link to={"/login"} 
             >
                 Already have an account?  
              </Link>
              
              </div>
              <button onClick={() => navigate("/")} className='p-1 border-1 rounded-3xl bg-sky-600 w-20 ml-36  mt-16 text-white'>Go Back</button>  
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;