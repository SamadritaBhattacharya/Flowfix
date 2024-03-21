import React from 'react'
import { useEffect, useRef } from 'react'
import NavHead from './NavHead'
//import Navbar from './Navbar/Navbar'
import About_us from './About_us'

const Home = () => {

  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      textRef.current.style.marginTop = value * 2.5 + 'px';
      leafRef.current.style.top = value * -1.5 + 'px';
      leafRef.current.style.left = value * 1.5 + 'px';
      hill5Ref.current.style.left = value * 1.5 + 'px';
      hill4Ref.current.style.left = value * -1.5 + 'px';
      hill1Ref.current.style.top = value * 0.5 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
        <NavHead />
        {/* <Navbar /> */}
        
        <section className='parallex relative flex justify-center items-center h-[100vh]'>
          {/* <div className='absolute font-extrabold text-gray-500 lg:font-bold text-[40px]'>
            WATER WATCH
          </div> */}
          {/* <div className=' absolute top-0 left-0  w-[100%] pointer-events-none'>
           </div> */}
           <div className='parallexi'>
             <img src='../hero_image/hill1.png' id='hill1' />
              <img src='../hero_image/hill2.png' id='hill2' />
              <img src='../hero_image/hill3.png' id='hill3' />
              <img src='../hero_image/hill4.png' id='hill4'/>
              <img src='../hero_image/hill5.png' id='hill5'/>
              <img src='../hero_image/tree.png' id='tree'/>

              <div 
              //  data-aos="fade-down"
              //  data-aos-delay="200"
               className=' absolute font-extrabold text-gray-200 lg:font-bold text-[40px] [text-shadow:2px_2px_4px_rgba(0,0,.2)]' id='text'>
                  WATER WATCH
              </div>


              {/* <h2 id="text" className=' absolute font-extrabold text-gray-500 lg:font-bold text-[40px] [text-shadow:2px_2px_4px_rgba(0,0,.2)] shadow-red-500 '>Parallax Website</h2> */}
              <img src='../hero_image/leaf.png' id='leaf'/>
              <img src='../hero_image/plant.png' id='plant'/>
           </div>
           
          
        
        </section>

        {/* <section ref={textRef} className='sec'>
          <About_us />
        </section> */}

        <section className='sec'>

          <About_us />
         
          <br />


          {/* <button>GET STARTED</button>  */}


            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> 
                    REPORT PROBLEMS 
                </span> 
            </button>

     </section>

     

        <About_us />

        <div ref={leafRef} className="leaf"></div>
        <div ref={hill1Ref} className="hill hill1"></div>
        <div ref={hill4Ref} className="hill hill4"></div>
        <div ref={hill5Ref} className="hill hill5"></div>

        
    </div>
  )
}

export default Home