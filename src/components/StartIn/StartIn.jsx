import React, { use } from "react";
import StartCart from "../StartCart/StartCart";
const StartIn = ({ startPromise }) => {
  const starts = use(startPromise);

  return (
    <>
      <div className="bg-[#F9FAFC] p-5 md:p-10 mt-10">
        <div className="lg:max-w-7xl  mx-auto mb-20 ">
          <div className="text-center my-20 space-y-3">
            <h1 className="font-bold text-[26px] md:text-5xl">Get Started in 3 Steps</h1>
            <p className="text-[#627382]">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {starts.map((start) => (
              <StartCart key={start.id} start={start} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StartIn;
