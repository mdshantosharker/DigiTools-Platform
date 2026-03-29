import { useState } from "react";
import "./App.css";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Banner from "./components/Banner/Banner";
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Navbar from "./components/Navbar/Navbar";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productsPromise = fetchProducts();

function App() {
  const [carts, setCart] = useState([]);
  return (
    <>
      <Navbar carts={carts}/>
      <Banner />
      <ActiveUsers />
      <DigitalTools productsPromise={productsPromise} carts={carts} setCart={setCart} />
    </>
  );
}

export default App;
