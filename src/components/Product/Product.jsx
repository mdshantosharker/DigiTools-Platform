import React, { useState } from "react";
import { toast } from "react-toastify";
import List from "../List/List";
import { AiOutlineCheck } from "react-icons/ai";

const Product = ({ product, carts, setCart }) => {
  const { name, icon, description, features, price, tag, period } = product;
  const [buy, setBuy] = useState(false);
  const handleBuy = () => {
    setBuy(true);
    const alreadyAdded = carts.find((c) => c.id === product.id);
    if (alreadyAdded) {
      toast.warn("Already added!");
      return;
    }
    setCart([...carts, product]);
    toast.success("Product added to the Cart!");
  };
  return (
    <div className="card   shadow-xl mt-10 border border-gray-200 hover:scale-110 transition-all">
      <div className="card-body h-full flex flex-col justify-between">
        <div className="flex justify-end">
          <span
            className={`badge badge-xs p-5 rounded-full text-[16px] ${tag === "popular" && "bg-[#E1E7FF] text-[#9514FA]"} ${tag === "new" && "bg-[#DBFCE7] text-[#0A883E]"} ${tag === "best seller" && "bg-[#FEF3C6] text-[#BB4D00]"}`}
          >
            {tag}
          </span>
        </div>

        <div className="space-y-4">
          <img className="w-16 h-16" src={icon} alt="" />
          <h2 className="text-4xl font-bold">{name}</h2>
          <p className="text-[#627382] text-[16px]">{description}</p>
          <span className="text-xl">
            <span className="font-bold text-3xl">${price}</span>/
            <span className="text-[16px] text-gray-400">{period}</span>
          </span>
        </div>

        <ul className="mt-3 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <List key={index} feature={feature} />
          ))}
        </ul>
        <div className="mt-6">
          <button
            onClick={() => handleBuy()}
            className={`btn  btn-block text-white  rounded-full p-5 ${buy ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}
          >
            {buy ? (
              <>
                <div className="flex items-center justify-center">
                  <AiOutlineCheck size={20} />
                  <h1>Added to Cart!</h1>
                </div>
              </>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
