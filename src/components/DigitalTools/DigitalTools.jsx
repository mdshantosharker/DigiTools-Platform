import React, { use, useState } from "react";
import Products from "../Products/Products";
import Carts from "../Carts/Carts";

const DigitalTools = ({ productsPromise, carts, setCart }) => {
  const products = use(productsPromise);
  //   console.log(products);
  const [active, setActive] = useState("products");

  //   console.log(carts);
  return (
    <div>
      <div className="text-center mt-16 space-y-4">
        <h1 className="font-bold text-3xl md:text-5xl">Premium Digital Tools</h1>
        <p className="text-[#627382] text-[16px]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="tabs tabs-box  rounded-full  border border-gray-200 justify-center bg-white mt-10 ">
          <input
            onClick={() => setActive("products")}
            type="radio"
            name="my_tabs_1"
            className={`tab ${active === "products" && " text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-5"}`}
            aria-label="Products"
            defaultChecked
          />
          <input
            onClick={() => setActive("cart")}
            type="radio"
            name="my_tabs_1"
            className={`tab ${active === "cart" && " text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-5"}`}
            aria-label={`Cart (${carts.length})`}
          />
        </div>
      </div>

      {active === "products" && (
        <Products carts={carts} setCart={setCart} products={products} />
      )}
      {active === "cart" && <Carts carts={carts} setCart={setCart} />}
    </div>
  );
};

export default DigitalTools;
