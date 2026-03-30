import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const List = ({ feature, name }) => {
  return (
    <li className="flex text-xl items-center gap-2">
      <AiOutlineCheck
        className={`${name === "Pro" ? "text-white" : "text-green-500"}`}
      />
      <span
        className={`text-[#627382] text-[16px] ${name === "Pro" && " text-white"}`}
      >
        {feature}
      </span>
    </li>
  );
};

export default List;
