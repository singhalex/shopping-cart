import { useLocation, useParams } from "react-router-dom";
import styles from "./ItemPage.module.css";
import { useOutletContext } from "react-router-dom";

const ItemPage = () => {
  const { itemID } = useParams();
  const { addToCart } = useOutletContext();
  const { state } = useLocation();
  const { item } = state;

  return (
    <div className={styles.item__container}>
      <img src={item.image} alt={item.title} />
      <div className={styles.item__description}>
        <h1>{item.title}</h1>
        <p>{item.rating.count} ratings</p>
        <p>{item.rating.rate} out of 5</p>
        <p>{item.description}</p>
        <p>${Number(item.price).toFixed(2)}</p>
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
