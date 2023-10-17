import styles from "./Cart.module.css";
import PropTypes from "prop-types";

const OrderSummary = ({ total, shipping }) => {
  const formatCurrency = (number) =>
    Number(number).toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });

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
      <button className={styles.checkout}>Checkout</button>
    </div>
  );
};

// Prop validation
OrderSummary.propTypes = {
  total: PropTypes.object,
  shipping: PropTypes.number,
};

export default OrderSummary;
