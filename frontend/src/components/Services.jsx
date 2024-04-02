import React from 'react';
import NavHead from './Navbar';
import { FaWrench } from 'react-icons/fa'; // Wrench Icon
// import { GiPipe } from 'react-icons/gi'
import { BsGearFill } from 'react-icons/bs'; // Gear Icon
import { FiTool } from 'react-icons/fi'; // Tool Icon
import { MdBuild } from 'react-icons/md'; // Build Icon
const services = [
  {
    title: "Pipeline Installation",
    description: "Expert installation of pipelines for various industries including oil and gas, water management, and utilities. Our experienced team ensures precise placement and adherence to safety standards.",
    icon: <FaWrench/>
  },
  {
    title: "Pipeline Maintenance",
    description: "Comprehensive maintenance services to ensure the smooth operation of pipelines. This includes regular inspections, cleaning, repairs, and preventive maintenance measures.",
    icon: <FaWrench/>
  },
  {
    title: "Pipeline Repair",
    description: "Swift and effective repair services to address pipeline leaks, corrosion, damages, or other issues. Our team utilizes advanced techniques and equipment to minimize downtime.",
    icon: <MdBuild/>
  },
  {
    title: "Pipeline Integrity Assessment",
    description: "Thorough assessment of pipeline integrity using advanced technologies such as inline inspection tools and ultrasonic testing. We identify potential risks and provide recommendations for maintaining pipeline integrity.",
    icon: <FiTool/>
  },
  {
    title: "Pipeline Construction",
    description: "From planning to execution, we handle pipeline construction projects with expertise and efficiency. Our services include site preparation, trenching, welding, coating, and testing.",

    icon: <BsGearFill/>
  },
  
  {
    title: "Quick Services",
    description: "From planning to execution, we handle pipeline construction projects with expertise and efficiency. Our services include site preparation, trenching, welding, coating, and testing.",
    icon: <BsGearFill/>
  },

];

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card bg-gray-600 p-8 rounded-lg shadow-md  hover:scale-105 hover:border-spacing-2 hover:shadow-[0px_9px_21px_5px_#c6f6d5]  transition duration-300 mb-6 py-14">
      <div className="text-3xl text-gray-100 ml-36 lg:ml-44
      ">{service.icon}</div>
      <h3 className="text-xl text-gray-50 font-medium mt-4 mb-2">{service.title}</h3>
      <p className="text-gray-200">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <NavHead/>
      <section className="services px-4 py-16 text-center bg-gradient-to-r  h-screen">
        <h2 className="text-3xl font-bold mb-12 text-white -mt-11">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 text-gray-700">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;