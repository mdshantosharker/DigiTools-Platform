import React, { use } from "react";
import SimpleCard from "./SimpleCard";

const SimpleCards = ({ simplePromise }) => {
  const simples = use(simplePromise);
  return (
    <div className="lg:max-w-7xl w-11/12 mx-auto mb-40">
      <div className="text-center mt-20 space-y-3 ">
        <h1 className="font-bold text-5xl">Simple, Transparent Pricing</h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {simples.map((simple) => (
          <SimpleCard simple={simple} />
        ))}
      </div>
    </div>
  );
};

export default SimpleCards;
