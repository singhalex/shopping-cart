import { useState, useEffect } from "react";
import styles from "./StorePage.module.css";
import { useOutletContext } from "react-router-dom";

const StorePage = () => {
  const [inventory, setInventory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, setCart, updateTotal } = useOutletContext();

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

  const handleClick = (item) => {
    item.qty = 1;
    const index = cart.findIndex((i) => i.id === item.id);

    updateCart(item, index);
  };

  const updateCart = (item, index) => {
    let newCart;
    if (index < 0) {
      newCart = [...cart, item];
      setCart(newCart);
    } else {
      newCart = cart.map((item, i) => {
        if (i === index) {
          const increment = item.qty + 1;
          return { ...item, qty: increment };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    updateTotal(newCart);
  };

  return (
    <div id="store-grid">
      {/* <h3>${total.grand}</h3> */}
      <div className={styles.container}>
        <div className={styles.productGrid}>
          {loading && <h1>Loading ...</h1>}
          {inventory &&
            inventory.map((item) => (
              <div className={`${styles.card} ${styles.stacked}`} key={item.id}>
                <img
                  src={item.image}
                  alt={item.description}
                  className={styles.card__img}
                />
                <div className={styles.card__content}>
                  <h2 className={styles.card__title}>{item.title}</h2>
                  <div className={styles.card__buy}>
                    <p className={styles.card__price}>
                      ${Number(item.price).toFixed(2)}
                    </p>
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
            ))}
          {error && <h1>There was a network error: {error.message}</h1>}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
