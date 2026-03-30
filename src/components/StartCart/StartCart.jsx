import React from "react";

const StartCart = ({ start }) => {
  const { id, name, img, description } = start;
  return (
    <div className="shadow-xl rounded-xl bg-white card-body border  border-gray-200 p-5">
      <div className="flex justify-end">
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white p-4 w-5 h-5 flex items-center justify-center">
          <span>0</span>
          {id}
        </div>
      </div>
      <div className="text-center space-y-3 flex flex-col justify-center items-center">
        <div className="flex justify-center rounded-full p-5 w-25 h-25 items-center bg-[#E1E7FF] ">
          <img src={img} alt="" />
        </div>
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default StartCart;
