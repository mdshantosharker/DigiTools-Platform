import React from "react";
import Cart from "../Cart/Cart";

const Carts = ({ carts, setCart }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handleProceed = () => {
    setCart([]);
  };
  return (
    <>
      <div>
        {carts.map((cart) => (
          <Cart cart={cart} carts={carts} setCart={setCart} />
        ))}
      </div>

      <div>
        <h1>Total:{totalPrice}</h1>
        <button onClick={() => handleProceed()} className="btn btn-accent">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default Carts;
