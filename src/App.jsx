import { useState } from "react";
import "./App.css";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Banner from "./components/Banner/Banner";
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Navbar from "./components/Navbar/Navbar";
import StartIn from "./components/StartIn/StartIn";

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
      <StartIn/>
    </>
  );
}

export default App;
