import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import PropTypes from "prop-types";

const CartCard = ({ item, decrementItem, incrementItem, deleteFromCart }) => {
  return (
    <div className={styles.itemCard}>
      <Link to={`/shop/${item.id}`}>
        <img
          src={item.image}
          alt={item.description}
          className={styles.itemCard__image}
        />
      </Link>
      <div className={styles.itemInfo}>
        <Link to={`/shop/${item.id}`}>
          <h3>{item.title}</h3>
        </Link>
        <h4>Qty: {item.qty}</h4>
        <p>{`Subtotal: ${Number(
          Number(item.qty * item.price).toFixed(2)
        ).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`}</p>
        <div className={styles.buttonContainer}>
          <div className={styles.plusMinusContainer}>
            <button onClick={() => decrementItem(item)}>-</button>
            <button onClick={() => incrementItem(item)}>+</button>
          </div>
          <button onClick={() => deleteFromCart(item.id)}>
            <img src="/trash.svg?url"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop validation
CartCard.propTypes = {
  item: PropTypes.object,
  decrementItem: PropTypes.func,
  incrementItem: PropTypes.func,
  deleteFromCart: PropTypes.func,
};

export default CartCard;
