import React from "react";

const Banner = () => {
  return (
    <div className="my-5 flex flex-col lg:flex-row md:gap-20  justify-between w-11/12 lg:max-w-7xl mx-auto items-center mt-10 md:mt-20">
      <div className="space-y-5 text-center md:text-left">
        <div
          className="flex items-center gap-2 bg-[#E1E7FF] w-fit
         rounded-full p-2 px-5 mx-auto md:mx-0"
        >
          <div className="bg-[#8C19F9] rounded-full w-2 h-2"></div>
          <h3 className="text-[#8C19F9] text-sm md:text-base">
            New: AI-Powered Tools Available
          </h3>
        </div>

        <h1 className="text-[#101727] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-[#627382] text-sm sm:text-base">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br className="hidden md:block" />
          software—all in one place. Start creating faster today.{" "}
          <br className="hidden md:block" />
          Explore Products
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
          <a className="btn p-4 sm:p-5 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </a>

          <div className="rounded-full bg-transparent btn-outline btn-primary btn flex items-center gap-2">
            <img className="w-4 sm:w-5" src="/Play.png" alt="" />
            <button className="text-[#9514FA]">Watch Demo</button>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto"
          src="/banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
