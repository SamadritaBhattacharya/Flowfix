import React from 'react'
import NavHead from './NavHead'
import About from './About_us'


const Hero = () => {
  return (
    <div className=' top-0 relative w-full h-screen'>
       <NavHead /> 
       <section className=' rom '>
        
          <img src='../lp5p.png' />
        
             
             <div className=' relative   -mt-[450px] [text-shadow:1px_1x_2px_rgba(0,0,.2)]' id='text'>
              <h1 className=' flex justify-center items-center  ml-[550px] text-[40px] font-semibold text-gray-800'>Hello world!</h1>
              
              <div className=' ml-[800px] mt-6 grid grid-cols-2 gap-4 max-w-xl w-full'>
                <p className='text-gray-800'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
                ante vitae sapien feugiat, in pretium dui fermentum.
                </p>
                <p className="text-gray-800">
                  Sed id metus in nibh bibendum ultrices. Nam et dui tellus. Sed id
                  consequat lacus, vel ornare augue.
                </p>
                <p className="text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
                  ante vitae sapien feugiat, in pretium dui fermentum.
                </p>
                <p className="text-gray-800">
                  Sed id metus in nibh bibendum ultrices. Nam et dui tellus. Sed id
                  consequat lacus, vel ornare augue.
                </p>
              </div>
              <button className="bg-blue-500 ml-[1000px] hover:bg-blue-300 hover:text-cyan-800  hover:font-semibold text-white py-2 px-4 rounded mt-4">
                Get Started
              </button>
              </div>
            
        </section>

        {/* <section >
          <About />
          <h1>About</h1>
        </section> */}
        
        
        
       
    </div>
  )
}
<About />

export default Hero