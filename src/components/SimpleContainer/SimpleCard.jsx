import React from "react";
import List from "../List/List";

const SimpleCard = ({ simple }) => {
  const { name, description, price, features, buttonText } = simple;

  return (
    <div
      className={`relative rounded-2xl card h-full flex flex-col shadow-xl mt-10 border border-gray-200 transition-all ${
        name === "Pro" &&
        "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
      }`}
    >
      {name === "Pro" && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#FEF3C6] text-[#BB4D00] px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div className="card-body flex flex-col">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">{name}</h2>

          <p
            className={`text-[#627382] text-[16px] ${
              name === "Pro" && "text-white"
            }`}
          >
            {description}
          </p>

          <span className="text-xl">
            <span className="font-bold text-3xl">${price}</span>/Month
          </span>
        </div>

        <ul className="mt-3 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <List key={index} feature={feature} name={name} />
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <button
            className={`btn btn-block  rounded-full p-5 ${
              name === "Pro"
                ? "bg-white border border-white"
                : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            }`}
          >
            <span
              className={`${
                name === "Pro"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold"
                  : "text-white"
              }`}
            >
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
