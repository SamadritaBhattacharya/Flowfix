import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    Aos.init({
        duration: 1000,
        delay: 200,
    })
  }, []);


     


return(
  <>
    

<section  className="about" id='about' data-aos="zoom-in-up"
    data-aos-offset="300">

          
            <div className="bg-cover bg-center bg-no-repeat bg-image h-screen" style={{ backgroundImage: `url('../water.png')` }}>
              <div className="absolute inset-0 flex flex-col  text-center">
                <div className=' mt-20 '>
                <h1 className="text-4xl font-bold mb-4 text-gray-950 justify-center items-center text-center">About Us</h1>
                <p className="text-gray-800 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
                  massa eget lacus laoreet tempor vel a ante. Nam elementum eros vel
                  ligula efficitur, ut interdum ipsum tincidunt.
                </p>
              </div>

              


              </div>
              </div>
              
            </section>
  </>
)


}

export default About
