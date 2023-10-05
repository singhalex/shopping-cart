import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import "./components/App.css";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({});

  return (
    <>
      <NavBar total={total} />
      <Outlet context={{ cart, setCart, total, setTotal }} />
    </>
  );
};

export default App;
