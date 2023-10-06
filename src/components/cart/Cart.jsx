import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, total, updateTotal } = useOutletContext();

  const decrementItem = (item) => {
    if (item.qty === 1) {
      deteFromCart(item.id);
      return;
    }

    const index = cart.findIndex((i) => i.id === item.id);

    let newCart = cart.map((item, i) => {
      if (i === index) {
        const decrement = item.qty - 1;
        return { ...item, qty: decrement };
      } else {
        return item;
      }
    });
    setCart(newCart);
    updateTotal(newCart);
  };

  // Refactor and lift to App component
  const incrementItem = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    console.log(index);

    let newCart = cart.map((item, i) => {
      if (i === index) {
        const increment = item.qty + 1;
        return { ...item, qty: increment };
      } else {
        return item;
      }
    });
    setCart(newCart);
    updateTotal(newCart);
  };

  const deteFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    updateTotal(newCart);
  };

  return (
    <>
      <h1>Cart Total: ${total.grand}</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.description} />
          <h3>{item.title}</h3>
          <h4>Qty: {item.qty}</h4>
          <p>Subtotal: ${Number(item.qty * item.price).toFixed(2)}</p>
          <button onClick={() => decrementItem(item)}>-</button>
          <button onClick={() => incrementItem(item)}>+</button>
          <button onClick={() => deteFromCart(item.id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Cart;
