import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const List = ({feature}) => {
  return (
    <li className="flex text-xl items-center gap-2">
      <AiOutlineCheck color="green" />
      <span className="text-[#627382] text-[16px]">
        {feature}
      </span>
    </li>
  );
};

export default List;
