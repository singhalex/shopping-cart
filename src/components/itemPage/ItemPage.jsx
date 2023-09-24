import { useEffect, useState } from "react";

const ItemPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemFetch = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/1");

        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        const item = await res.json();
        console.log(item);
        setData(item);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    itemFetch();
  }, []);

  return (
    <div className="item-page">
      {loading && <h1>Loading... </h1>}
      {data && (
        <>
          <img src={data.image} alt={data.title} />
          <div className="item-detail">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div>${data.price}</div>
            <button>Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemPage;
