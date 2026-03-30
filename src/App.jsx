import { useState } from "react";
import "./App.css";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Banner from "./components/Banner/Banner";
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Navbar from "./components/Navbar/Navbar";
import StartIn from "./components/StartIn/StartIn";
import SimpleCards from "./components/SimpleContainer/SimpleCards";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const fetchStartCarts = async () => {
  const res = await fetch("/start.json");
  return res.json();
};

const productsPromise = fetchProducts();
const startPromise = fetchStartCarts();

function App() {
  const [carts, setCart] = useState([]);
  return (
    <>
      <Navbar carts={carts} />
      <Banner />
      <ActiveUsers />
      <DigitalTools
        productsPromise={productsPromise}
        carts={carts}
        setCart={setCart}
      />
      <StartIn startPromise={startPromise} />
      <SimpleCards />
    </>
  );
}

export default App;
