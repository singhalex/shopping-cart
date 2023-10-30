import { Link } from "react-router-dom";
import styles from "./StorePage.module.css";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const StoreCard = ({ item }) => {
  const { addToCart } = useOutletContext();

  return (
    <div className={`${styles.card} ${styles.stacked}`}>
      <Link to={`/shop/${item.id}`} state={{ item }}>
        <img
          src={item.image}
          alt={item.description}
          className={styles.card__img}
        />
      </Link>
      <div className={styles.card__content}>
        <Link to={`/shop/${item.id}`} state={{ item }}>
          <h2 className={styles.card__title}>{item.title}</h2>
        </Link>
        <div className={styles.card__buy}>
          <p className={styles.card__price}>${Number(item.price).toFixed(2)}</p>
          <button
            className={styles.card__button}
            onClick={() => {
              addToCart(item);
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
  addToCart: PropTypes.func,
};

export default StoreCard;
