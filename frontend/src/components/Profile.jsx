// import React, { useEffect, useState } from 'react'
// import NavHead from './NavHead'
// import {useNavigate } from 'react-router-dom'
// import { useParams} from 'react-router-dom'
// //import axios from 'axios'


// const Profile = () => {

//   const navigate = useNavigate();
//   const {userid} = useParams();
//   //const [data,setData] = useState([]);

//   // fetch('/api/user/current-user')
//   // .then(response => response.json() )
//   // .then( data => {
//   //   console.log(data);
//   //   setData(data)
    
//   // },[])

//   // useEffect( () => {
//   //   axios.get('/api/user/current-user', {userid, username})
//   //   .then( response => response.json())
//   //   .then(data => console.log(data));
//   // })

//   return (
//     <div className=' top-0 relative w-full h-screen'>
//        <NavHead /> 
//        <section className=' rom '>
        
//           <img src='../lp5p.png' />
        
             
//              <div className=' relative   -mt-[450px] [text-shadow:1px_1x_2px_rgba(0,0,.2)]' id='text'>
//               <h1 className=' flex justify-center items-center  ml-[550px] text-[40px] font-semibold text-gray-800'>
//                 Hello {userid}!
//               </h1>
              
//               <div className=' ml-[800px] mt-6 grid grid-cols-2 gap-4 max-w-xl w-full'>
//                 <p className='text-gray-800'>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
//                 ante vitae sapien feugiat, in pretium dui fermentum.
//                 </p>
//                 <p className="text-gray-800">
//                   Sed id metus in nibh bibendum ultrices. Nam et dui tellus. Sed id
//                   consequat lacus, vel ornare augue.
//                 </p>
//                 <p className="text-gray-800">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
//                   ante vitae sapien feugiat, in pretium dui fermentum.
//                 </p>
//                 <p className="text-gray-800">
//                   Sed id metus in nibh bibendum ultrices. Nam et dui tellus. Sed id
//                   consequat lacus, vel ornare augue.
//                 </p>
//               </div>
//               <button onClick={() => navigate("/report")} className="bg-blue-500 ml-[1000px] hover:bg-blue-300 hover:text-cyan-800  hover:font-semibold text-white py-2 px-4 rounded mt-4">
//                 Report Problems
//               </button>
//               </div>
            
//         </section>

        
        
        
        
       
//     </div>

//     // <div>
//     //   <h1>Hello username page</h1>
//     // </div>
//   )
// }


// export default Profile

import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Review } from "./Review";



const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-image h-screen w-full "
        style={{ backgroundImage: `url('../propic.jpg')` }}
      >
        <Navbar />

        <section className="flex flex-col ml-8 ">

        <h1 className="text-white  sm:text-5xl lg:text-6xl mt-28 ml-[70px] mb-6 text-4xl md:text-5xl  leading-tight"> 
                    <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-cyan-200 via-green-50 to-teal-100  ">
                         Welcome to <br />
                         FLOWFIX:  {" "}
                    </span>    
                    {/* bg-gradient-to-r from-purple-400 to-blue-600 */}
                    <br />
                    <p className="text-gray-50 text-xl md:text-xl lg:w-[800px] lg:pt-4 lg:text-xl lg:font-semibold leading-tight lg:p-16 lg:mb-2   md:px-0 mb-8">
          The only one stop solution for all your drainage related problems to be solved:  <br />
                    
                    <TypeAnimation sequence={[ 
                        "Fastly", 2000, 
                        "Securely", 2000, 
                        "Safely", 2000, 
                        // "Read, Sleep, Code, Repeat!", 1000, 
                    ]} 
                    wrapper="span" speed={50} repeat={Infinity} className=" font-medium  text-teal-100" /></p>

                </h1>        

          
          {/* <p className="text-gray-50 text-xl md:text-xl lg:w-[800px] lg:pt-4 lg:text-xl lg:font-semibold leading-tight lg:p-16 lg:mb-2   md:px-0 mb-8">
          Frustrated with clogged drains and slow water flow? Fluxion streamlines the repair process. Simply report your drainage problem through our user-friendly platform. We'll register your complaint and pinpoint the issue on an interactive map. Our network of skilled engineers will be instantly notified, ensuring a fast response to get your drainage problems resolved quickly and efficiently.
          </p>  */}

          <div className="flex flex-col md:flex-row items-center justify-center lg:flex md:ml-[50px] lg:ml-[100px]">
            
            <button
              onClick={() => navigate("/report")}
              className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Report Problems
            </button>
          </div>
        </section>
      </div>

      <Review />

      
    </div>
  );
};

export default Profile;