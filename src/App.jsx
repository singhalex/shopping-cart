import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import "./components/App.css";
import { useState } from "react";
import Footer from "./components/footer/Footer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({ numItems: 0 });

  const updateTotal = (newCart) => {
    let grand = Number(
      newCart.reduce(
        (accumulator, currentItem) =>
          accumulator + currentItem.price * currentItem.qty,
        0
      )
    ).toFixed(2);

    let numItems = newCart.reduce(
      (accumulator, currentItem) => accumulator + currentItem.qty,
      0
    );

    setTotal({ grand, numItems });
  };

  return (
    <>
      <NavBar total={total} />
      <Outlet context={{ cart, setCart, total, setTotal, updateTotal }} />
      <Footer />
    </>
  );
};

export default App;
