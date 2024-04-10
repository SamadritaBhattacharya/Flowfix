import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Report = () => {
    const [username,setName] = useState()
    const [contact,setContact] = useState()
    const [address,setAddress] = useState()
    const [category,setCategory] = useState()
    const [description,setDescription] = useState()

    const navigate = useNavigate();
  

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/complaint/new-complaint', 
            {username,contact,address,category,description}
        )
        .then(result => {console.log(result)
            navigate('/success')
        })
    .catch(err => console.log(err))
    }

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-3" style={{ position: "relative" }}>
        <img src="../formpic.png" alt="DOC" className="h-screen rounded-xl shadow-sky-600 shadow-md" style={{ filter: "blur(5px) brightness(0.4)", position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%" }} />

        <div className="bg-lblack h-5/6 w-1/2 rounded-xl shadow-sky-600 shadow-md">
          <div className="flex items-center ml-2 mt-3">
            <img src="../flulogo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
            <Link to="/" className="ml-2 font-semibold text-gray-100">
              FLOWFIX
              <strong className="ml-96 text-gray-100">Report Portal</strong>
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-4 py-2 flex flex-col justify-between"
            action="POST"
          >
           
            <div className="mt-4 w-1/2">
              <label htmlFor="username" className="block text-sky-400">
                Name:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="border rounded-md px-2 py-1 w-full text-sky-800"
              />
            </div>
            <div className="mt-4 w-1/2">
              <label htmlFor="contact" className="block text-sky-400">
                Contact
              </label>
              <input
                type="Number"
                id="contact"
                name="contact"
                placeholder="Enter your phone number"
                onChange={(e) => setContact(e.target.value)}
                className="border rounded-md px-2 py-1 w-full text-sky-800"
              />
            </div>
            <div className="mt-4 w-1/2">
              <label htmlFor="address" className="block text-sky-400">
               Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)} 
                className="border rounded-md px-2 py-1 w-full text-sky-800"
              />
            </div>
            <div className="mt-4 w-1/2">
              <label htmlFor="category" className="block text-sky-400">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border rounded-md  w-full py-2 resize-none text-sky-800"
              >
                 <option value='Leakage'>Leakage</option>
                                <option value='Jammed'>Jammed</option>
                                <option value='Drain overflow'>Drain overflow</option>
                                <option value='others'>Others</option>
              </select>
            </div>
            <div className="mt-4 w-full flex">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="description"
                  className="block text-sky-400"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe your problem"
                  onChange={(e) => setDescription(e.target.value)} 
                  className="border rounded-md px-2 py-1 w-full h-20 resize-none text-sky-800"
                ></textarea>
              </div>
             
            </div>

            <div className="mt-4 w-full text-center">
              <button
                type="submit"
                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-800 mt-6"
              >
                Submit
              </button>
              <button onClick={() => navigate("/profile")} className='p-1 border-1 rounded-3xl bg-sky-600 w-20 ml-48  text-white mt-2'>Go Back</button>  
            </div>
          </form>
        </div>
        <img src="../formpic.png" alt="DOC" className="h-5/6 rounded-xl shadow-sky-500 shadow-md" />
      </div>
    </>
  );
};

export default Report;



