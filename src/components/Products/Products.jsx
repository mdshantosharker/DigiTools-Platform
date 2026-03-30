import React from "react";
import Product from "../Product/Product";

const Products = ({ products, carts, setCart }) => {
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10 w-11/12  lg:max-w-7xl mx-auto">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          carts={carts}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default Products;
