import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import CartCard from "./CartCard";
import ScrollButton from "../ScrollButton/ScrollButton";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const { cart, setCart, total, updateTotal } = useOutletContext();
  const shipping = 4.95;
  const taxRate = 0.1;

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
  };

  const deleteFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    updateTotal(newCart);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cartItemsContainer}>
          <h2>My Cart</h2>
          <hr></hr>
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
            <h3>Your cart is empty.</h3>
          )}
        </div>
        <OrderSummary total={total} shipping={shipping} taxRate={taxRate} />
      </div>

      <ScrollButton />
    </>
  );
};

export default Cart;
