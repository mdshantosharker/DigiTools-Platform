import "./App.css";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Banner from "./components/Banner/Banner";
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ActiveUsers />
      <DigitalTools/>
    </>
  );
}

export default App;
