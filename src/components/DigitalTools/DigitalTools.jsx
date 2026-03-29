import React, { useState } from "react";
import Products from "../Products/Products";
import Carts from "../Carts/Carts";

const DigitalTools = () => {
  const [active, setActive] = useState("products");
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="font-bold text-2xl">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-white mt-10">
        <input
          onClick={() => setActive("products")}
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Products"
          defaultChecked
        />
        <input
          onClick={() => setActive("cart")}
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Cart"
        />
      </div>

      {active === "products" && <Products />}
      {active === "cart" && <Carts />}
    </div>
  );
};

export default DigitalTools;
