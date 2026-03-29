import React from "react";
import Cart from "../Cart/Cart";

const Carts = ({ carts, setCart }) => {
  return (
    <div>
      {carts.map((cart) => (
        <Cart cart={cart} carts={carts} setCart={setCart}/>
      ))}
    </div>
  );
};

export default Carts;
