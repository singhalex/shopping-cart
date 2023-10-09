import { useState, useEffect } from "react";
import styles from "./StorePage.module.css";
import { useOutletContext } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import StoreCard from "./StoreCard";

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
            inventory.map((item) => (
              <StoreCard key={item.id} item={item} handleClick={handleClick} />
            ))}
          {error && <h1>There was a network error: {error.message}</h1>}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
