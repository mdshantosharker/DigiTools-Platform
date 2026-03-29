import React from "react";

const Cart = ({ cart, carts, setCart }) => {
    
  const handleRemove = (id) => {
    const filterCarts = carts.filter((c) => c.id !== id);
    setCart(filterCarts);
  };
  return (
    <>
      <div className="flex gap-20 my-10">
        <h1>Cart{cart.id}</h1>
        <button onClick={() => handleRemove(cart.id)} className="btn btn-error">
          Delete
        </button>
      </div>
      
    </>
  );
};

export default Cart;
