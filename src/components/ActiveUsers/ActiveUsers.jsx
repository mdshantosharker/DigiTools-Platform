import React from "react";

const ActiveUsers = () => {
  return (
    
    <>
      <div className="bg-linear-to-bl from-[#9514FA] to-[#4F39F6] text-white p-6 sm:p-8 md:p-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-36 mt-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">50K+</h1>
          <p className="mt-2 text-sm sm:text-base">Active Users</p>
        </div>

        <div className="divider md:divider-horizontal before:bg-white after:bg-white"></div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">200+</h1>
          <p className="mt-2 text-sm sm:text-base">Premium Tools</p>
        </div>

        <div className="divider md:divider-horizontal before:bg-white after:bg-white"></div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">4.9</h1>
          <p className="mt-2 text-sm sm:text-base">Rating</p>
        </div>
      </div>
    </>
  );
};

export default ActiveUsers;
