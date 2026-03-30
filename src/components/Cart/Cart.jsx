import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, carts, setCart }) => {
  const { icon, name, price } = cart;

  const handleRemove = (id) => {
    const filterCarts = carts.filter((c) => c.id !== id);
    setCart(filterCarts);
    toast.warn("Remove Product from the cart!");
  };
  return (
    <>
      <div className="flex justify-between  my-8 bg-[#eef0f1] p-4 rounded-xl">
        <div className="flex gap-5 items-center">
          <div className="bg-white rounded-full p-2">
            <img className="w-8 h-8" src={icon} alt="" />
          </div>
          <div>
            <h1 className="font-bold md:text-xl">{name}</h1>
            <p className="text-[#627382]">${price}</p>
          </div>
        </div>

        <button
          onClick={() => handleRemove(cart.id)}
          className="text-[#FF3980] font-bold text-xs lg:text-xl"
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Cart;
