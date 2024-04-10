import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Review } from "./Review";



const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-image h-screen w-full "
        style={{ backgroundImage: `url('../gg5.jpg')` }}
      >
        <Navbar />

        <section className="flex flex-col ml-8 ">

        <h1 className="text-white  sm:text-5xl lg:text-6xl mt-28 ml-[70px] mb-6 text-4xl md:text-5xl  leading-tight"> 
                    <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-cyan-200 via-green-50 to-teal-100  ">
                         FLOWFIX:  {" "}
                    </span>    
                    {/* bg-gradient-to-r from-purple-400 to-blue-600 */}
                    <br />
                    <TypeAnimation sequence={[ 
                        "Report", 1000, 
                        " Repair", 1000, 
                        "Resolve", 1000, 
                        // "Read, Sleep, Code, Repeat!", 1000, 
                    ]} 
                    wrapper="span" speed={50} repeat={Infinity} className=" font-medium text-teal-100" />

                </h1>        

          
          <p className="text-gray-50 text-xl md:text-xl lg:w-[800px] lg:pt-4 lg:text-xl lg:font-semibold leading-tight lg:p-16 lg:mb-2   md:px-0 mb-8">
          Frustrated with clogged drains and slow water flow? Fluxion streamlines the repair process. Simply report your drainage problem through our user-friendly platform. We'll register your complaint and pinpoint the issue on an interactive map. Our network of skilled engineers will be instantly notified, ensuring a fast response to get your drainage problems resolved quickly and efficiently.
          </p> 

          <div className="flex flex-col md:flex-row items-center justify-center lg:flex md:ml-[50px] lg:ml-[100px]">
            
            <button
              onClick={() => navigate("/register")}
              className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Get Started for Free
            </button>
          </div>
        </section>
      </div>

      <Review />

      
    </div>
  );
};

export default Hero;