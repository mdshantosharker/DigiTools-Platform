import React from "react";
import Cart from "../Cart/Cart";

const Carts = ({ carts, setCart }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handleProceed = () => {
    setCart([]);
  };
  return (
    <>
      <div className="w-11/12 lg:max-w-7xl mx-auto border border-gray-200 rounded-2xl p-10 space-y-5 my-10">
        <h1 className=" font-bold text-3xl">Your Cart</h1>
        <div>
          {carts.map((cart) => (
            <Cart cart={cart} carts={carts} setCart={setCart} />
          ))}
        </div>

        <div>
          <div className="flex justify-between items-center my-5">
            <h1 className="text-[#627382] text-[16px] ">Total:</h1>
            <p className="font-bold text-2xl">${totalPrice}</p>
          </div>

          <button
            onClick={() => handleProceed()}
            className="btn text-white w-full py-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-5"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Carts;
