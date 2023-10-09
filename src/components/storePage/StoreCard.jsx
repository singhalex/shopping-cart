import styles from "./StorePage.module.css";
import PropTypes from "prop-types";

const StoreCard = ({ item, handleClick }) => {
  return (
    <div className={`${styles.card} ${styles.stacked}`}>
      <img
        src={item.image}
        alt={item.description}
        className={styles.card__img}
      />
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{item.title}</h2>
        <div className={styles.card__buy}>
          <p className={styles.card__price}>${Number(item.price).toFixed(2)}</p>
          <button
            className={styles.card__button}
            onClick={() => {
              handleClick(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Validate props
StoreCard.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.function,
};

export default StoreCard;
