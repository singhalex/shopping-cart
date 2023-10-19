import styles from "./Cart.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const OrderSummary = ({ total, shipping }) => {
  const [checkout, setCheckout] = useState(false);

  const formatCurrency = (number) =>
    Number(number).toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });

  const handleCheckout = () => {
    setCheckout(!checkout);
  };

  return (
    <div className={styles.summaryContainer}>
      <h2>Order Summary</h2>
      <hr />
      <div>
        <span>Subtotal</span>
        <span>
          {total.grand > 0 ? formatCurrency(Number(total.grand)) : "$0.00"}
        </span>
      </div>
      <div>
        <span>Shipping</span>
        <span>{total.grand > 0 ? formatCurrency(shipping) : "$0.00"}</span>
      </div>
      <hr />
      <div>
        <span className={styles.grandTotal}>Total</span>
        <span className={styles.grandTotal}>
          {total.grand > 0
            ? formatCurrency(Number(total.grand) + shipping)
            : "$0.00"}
        </span>
      </div>
      <button className={styles.checkout} onClick={handleCheckout}>
        Checkout
      </button>
      {checkout && <p>This is not a real store. You cannot buy anything.</p>}
    </div>
  );
};

// Prop validation
OrderSummary.propTypes = {
  total: PropTypes.object,
  shipping: PropTypes.number,
};

export default OrderSummary;
