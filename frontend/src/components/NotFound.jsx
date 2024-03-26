import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className=" flex min-h-[100vh] justify-center items-center bg-slate-300 ">
        <div className=" max-w-[1500px] text-center">
          <img src="/notFound.svg" alt="notFound" className=" mb-8 [@media(max-width:600px)]:w-full" />
          <h1 className=" text-[2.75rem] font-light text-[#222] mb-2 [@media(max-width:600px)]:text-[1.75rem]">LOOKS LIKE YOU'RE LOST</h1>
          <p className="text-[18px] font-light text-[#555] mb-6">We can't seem to find you the page you're looking for</p>
          <Link to={"/"} className="border-[1px] border-[solid] border-[black] px-[28px] py-[8px] rounded-[30px] flex w-[fit-content] mx-[auto] my-[0] items-center justify-center no-underline text-[15px] text-[#111]  hover:text-[#fff] hover:bg-[#111] hover:[transition:ease-in-out_0.3s]">
            Back to Home{"  "}
            <span className=" ml-2">
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;