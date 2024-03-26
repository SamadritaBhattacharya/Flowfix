import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className=" flex min-h-[100vh] justify-center items-center">
        <div className=" max-w-[1500px] text-center">
          <img src="/notFound.svg" alt="notFound" className=" mb-8" />
          <h1 className=" font-extrabold size-8 text-gray-800 mb-6">LOOKS LIKE YOU'RE LOST</h1>
          <p>We can't seem to find you the page you're looking for</p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;