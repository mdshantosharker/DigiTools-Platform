import React from "react";

const StartIn = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="text-center my-20 space-y-3">
        <h1 className="font-bold text-5xl">Get Started in 3 Steps</h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className=" shadow-2xl border w-96 border-gray-300 p-5">
        <div className="flex justify-end">
          <div className="bg-purple-600 rounded-full text-white p-4 w-5 h-5 flex items-center justify-center">
            1
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <div className="flex justify-center rounded-full p-5 w-18 h-18 items-center bg-[#E1E7FF] ">
            <img src="/public/rocket.png" alt="" />
          </div>
          <h3 className="text-2xl font-bold">Create Account</h3>
          <p className="text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartIn;
