import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/review1.jpeg"
import img2 from "../assets/review2.jpeg"
import img3 from "../assets/review3.jpeg"
import img4 from "../assets/review4.jpeg"
import img5 from "../assets/review5.jpeg"
export const Review = () => {
  const data = [
    {
      description:"Great service! The team was efficient and professional. They completed the job ahead of schedule and within budget. Highly recommended.",
      icon:img1,
    },
    {
      description:"Outstanding service from start to finish. The communication was excellent, and they provided a thorough explanation of the work involved. Will definitely use their services again.",
      icon: img2,
    },
    {
      description:"Overall satisfied with the service, but there were some minor issues with scheduling delays. However, the quality of work was good.",
      icon: img3,
    },
    {
      description:"Great service! The team was efficient and professional. They completed the job ahead of schedule and within budget. Highly recommended.",
      icon: img4,
    },
    {
      description: "Absolutely fantastic service! The team went above and beyond to address all our needs. The project was completed smoothly and with great attention to detail. Highly recommend them for any pipeline project.",
      icon: img5,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="col-md-12 text-center mt-[100px]">
        <h2 className="text-4xl text-gray-100 font-semibold ">TESTIMONIALS</h2>
        <p className=" text-gray-100 mb-10 text-xl mt-8">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt non
          ipsa molestiae, ab cupiditate expedita error iusto molestias
          laboriosam ullam, similique, deleniti quasi sequi facilis. Eveniet
          fugit illum perferendis atque?
        </p>
      </div>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.description}
              className="bg-gray-600 h-[450px] text-white rounded-xl text-center"
            >
              <div className="h-56 bg-dgreen flex justify-center items-center rounded-t-xl">
                <img src={d.icon} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.description}</p>

                {/* <button className='bg-gray-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};