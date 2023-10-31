import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.css";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import ScrollButton from "../ScrollButton/ScrollButton";

const ItemPage = () => {
  const { itemID } = useParams();
  const { addToCart } = useOutletContext();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const itemFetch = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${itemID}`, {
          mode: "cors",
        });

        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }

        const fetchedItem = await res.json();

        setItem(fetchedItem);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    itemFetch();
  }, []);

  return (
    <>
      <div className={styles.item__container}>
        {item && (
          <>
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
          </>
        )}
        {loading && (
          <div className={styles.loader}>
            <RotatingLines
              strokeColor="#777"
              strokeWidth="5"
              animationDuration="1"
              width="200"
              visible={true}
              ariaLabel="loading"
            />
          </div>
        )}
        {error && <h1>There was a network error: {error}</h1>}
      </div>
      <ScrollButton />
    </>
  );
};

export default ItemPage;
