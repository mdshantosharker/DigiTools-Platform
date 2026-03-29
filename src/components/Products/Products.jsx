import React from "react";
import Product from "../Product/Product";

const Products = ({ products, carts, setCart }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10 ">
      {products.map((product) => (
        <Product key={product.id} product={product} carts={carts} setCart={setCart} />
      ))}
    </div>
  );
};

export default Products;
