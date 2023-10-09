import styles from "./Cart.module.css";

const CartCard = ({ item, decrementItem, incrementItem, deleteFromCart }) => {
  return (
    <div className={styles.itemCard}>
      <img src={item.image} alt={item.description} />
      <div className={styles.itemInfo}>
        <h3>{item.title}</h3>
        <h4>Qty: {item.qty}</h4>
        <p>Subtotal: ${Number(item.qty * item.price).toFixed(2)}</p>
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

export default CartCard;
