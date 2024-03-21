import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    Aos.init({
        duration: 2500,
        delay: 200,
    })
  }, []);

  return (
   <section  className="about" id='about' data-aos="zoom-in-up"
   data-aos-offset="300" >
     
     <div className='font-semibold text-3xl text-[#fff] mb-3'>
      <h1>About Us</h1>
      </div>
     
      <div className=" font-medium text-[#fff] overflow-hidden p-8 bg-opacity-30 h-full shadow-2xl shadow-black rounded-xl  backdrop-blur-xl backdrop-filter flex mx-auto space-x-8" >
        {/* <div data-aos="zoom-in-up"
            data-aos-offset="400"> */}
           
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore architecto tempora, quo corporis beatae corrupti doloremque a nobis dicta.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tempore?
        <br /><br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente temporibus nulla impedit vero doloremque eaque cum amet, reprehenderit odit non quisquam perspiciatis dignissimos nam, illo facilis odio autem. Itaque impedit voluptates eaque animi tenetur dicta deserunt eius fuga harum.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, laborum?
        </p>
        {/* </div> */}
       
      </div>
   </section>
  )
}

export default About
