import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import CartCard from "./CartCard";
import ScrollButton from "../ScrollButton/ScrollButton";

const Cart = () => {
  const { cart, setCart, total, updateTotal } = useOutletContext();

  const decrementItem = (item) => {
    if (item.qty === 1) {
      deleteFromCart(item.id);
      return;
    }

    const index = cart.findIndex((i) => i.id === item.id);

    let newCart = cart.map((item, i) => {
      if (i === index) {
        const decrement = item.qty - 1;
        return { ...item, qty: decrement };
      } else {
        return item;
      }
    });
    setCart(newCart);
    updateTotal(newCart);
  };

  // Refactor and lift to App component
  const incrementItem = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);

    let newCart = cart.map((item, i) => {
      if (i === index) {
        const increment = item.qty + 1;
        return { ...item, qty: increment };
      } else {
        return item;
      }
    });
    setCart(newCart);
    updateTotal(newCart);
    console.log(typeof total.grand);
  };

  const deleteFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    updateTotal(newCart);
  };

  return (
    <>
      <div className={styles.container}>
        {total.grand > 0 ? (
          <h1>
            {`Cart Total: ${Number(total.grand).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}`}
          </h1>
        ) : (
          <div></div>
        )}
        {/* <h1>Cart Total: ${total.grand}</h1> */}
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartCard
              item={item}
              decrementItem={decrementItem}
              incrementItem={incrementItem}
              deleteFromCart={deleteFromCart}
              key={item.id}
            />
          ))
        ) : (
          <h1>Cart is empty</h1>
        )}
      </div>
      <ScrollButton />
    </>
  );
};

export default Cart;
