import React from 'react'
import Navbar from './Navbar'
import NavHead from './NavHead'
//import NavHead from './NavHead'

const Hero = () => {
  return (
    <div className=' top-0 relative w-full h-screen'>
       <NavHead /> 
       <section className=' rom '>
             <img src='../landindrainpg.jpg' />
        </section>
        {/* <section className='absolute inset-0 top-0 left-0 bg-cover bg-center' style={{backgroundImage: `url('../landingpage.jpg')`}}> */}
            

            {/* <h1></h1>
        </section> */}
       
    </div>
  )
}

export default Hero