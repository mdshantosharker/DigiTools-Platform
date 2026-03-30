import React from "react";
import Cart from "../Cart/Cart";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";

const Carts = ({ carts, setCart }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handleProceed = () => {
    setCart([]);
    toast.success("All Product are remove from the cart!");
  };
  return (
    <>
      <div className="w-11/12 lg:max-w-7xl mx-auto border border-gray-100 shadow-2xl rounded-2xl p-10 space-y-5 my-10">
        <h1 className=" font-bold text-3xl">Your Cart</h1>

        {carts.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <CiShoppingCart size={100} color="gray" />
            <h1 className="text-5xl text-gray-400">Your Cart is empty</h1>
          </div>
        ) : (
          <>
            <div>
              {carts.map((cart) => (
                <Cart
                  key={cart.id}
                  cart={cart}
                  carts={carts}
                  setCart={setCart}
                />
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center my-5">
                <h1 className="text-[#627382] text-[16px] ">Total:</h1>
                <p className="font-bold text-2xl">${totalPrice}</p>
              </div>

              <button
                onClick={handleProceed}
                className="btn text-white w-full py-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-5"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Carts;
