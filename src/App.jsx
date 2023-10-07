import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import "./components/App.css";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({ numItems: 0 });

  const updateTotal = (newCart) => {
    let runningTotal = 0;
    let numItems = 0;
    newCart.forEach((item) => {
      runningTotal += item.price * item.qty;
      numItems += item.qty;
    });
    setTotal({ grand: Number(runningTotal).toFixed(2), numItems });
  };

  return (
    <>
      <NavBar total={total} />
      <Outlet context={{ cart, setCart, total, setTotal, updateTotal }} />
    </>
  );
};

export default App;
