import React, { use, useState } from "react";
import Products from "../Products/Products";
import Carts from "../Carts/Carts";

const DigitalTools = ({ productsPromise }) => {
  const products = use(productsPromise);
  //   console.log(products);
  const [active, setActive] = useState("products");

  const [carts, setCart] = useState([]);


//   console.log(carts);
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
          aria-label={`Cart (${carts.length})`}
        />
      </div>

      {active === "products" && <Products carts={carts} setCart={setCart} products={products} />}
      {active === "cart" && <Carts carts={carts} setCart={setCart}/>}
    </div>
  );
};

export default DigitalTools;
