import { useState, useEffect } from "react";
import styles from "./StorePage.module.css";
import { RotatingLines } from "react-loader-spinner";
import StoreCard from "./StoreCard";
import ScrollButton from "../ScrollButton/ScrollButton";

const StorePage = () => {
  const [inventory, setInventory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const inventoryFetch = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20", {
          mode: "cors",
        });

        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        const inventoryArray = await res.json();
        setInventory(inventoryArray);
        setError(null);
      } catch (err) {
        setError(err.message);
        setInventory(null);
      } finally {
        setLoading(false);
      }
    };

    inventoryFetch();
  }, []);

  return (
    <>
      <div id="store-grid">
        <div className={styles.container}>
          <div className={styles.productGrid}>
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
            {inventory &&
              inventory.map((item) => <StoreCard key={item.id} item={item} />)}
            {error && <h1>There was a network error: {error.message}</h1>}
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  );
};

export default StorePage;
