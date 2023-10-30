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

  const addToCart = (item) => {
    item.qty = 1;
    const index = cart.findIndex((i) => i.id === item.id);

    updateCart(item, index);
  };

  const updateCart = (item, index) => {
    let newCart;
    if (index < 0) {
      newCart = [...cart, item];
      setCart(newCart);
    } else {
      newCart = cart.map((item, i) => {
        if (i === index) {
          const increment = item.qty + 1;
          return { ...item, qty: increment };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    updateTotal(newCart);
  };

  return (
    <>
      <NavBar total={total} />
      <Outlet
        context={{ cart, setCart, total, setTotal, updateTotal, addToCart }}
      />
      <Footer />
    </>
  );
};

export default App;
