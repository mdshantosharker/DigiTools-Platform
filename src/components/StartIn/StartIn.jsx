import React, { use } from "react";
import StartCart from "../StartCart/StartCart";

// console.log({startPromise});
const StartIn = ({ startPromise }) => {
  const starts = use(startPromise);
  console.log(starts);
  return (
    <>
      <div className="bg-[#F9FAFC] p-10 mt-20">
        <div className="lg:max-w-7xl w-11/12 mx-auto mb-20 ">
          <div className="text-center my-20 space-y-3">
            <h1 className="font-bold text-5xl">Get Started in 3 Steps</h1>
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
