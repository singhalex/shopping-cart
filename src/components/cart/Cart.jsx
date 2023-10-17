import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import CartCard from "./CartCard";
import ScrollButton from "../ScrollButton/ScrollButton";

const Cart = () => {
  const { cart, setCart, total, updateTotal } = useOutletContext();
  const shipping = 4.95;

  const formatCurrency = (number) =>
    Number(number).toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });

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
        <div className={styles.summaryContainer}>
          <h2>Order Summary</h2>
          <hr />
          <div>
            <span>Subtotal</span>
            <span>
              {cart.length > 0 ? formatCurrency(Number(total.grand)) : "$0.00"}
            </span>
          </div>
          <div>
            <span>Shipping</span>
            <span>{cart.length > 0 ? formatCurrency(shipping) : "$0.00"}</span>
          </div>
          <hr />
          <div>
            <span className={styles.grandTotal}>Total</span>
            <span className={styles.grandTotal}>
              {cart.length > 0
                ? formatCurrency(Number(total.grand) + shipping)
                : "$0.00"}
            </span>
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </div>

      <ScrollButton />
    </>
  );
};

export default Cart;
