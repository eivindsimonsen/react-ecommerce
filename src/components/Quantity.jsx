import React, { useState } from "react";

function Quantity(props) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setPrice(price + 125);
  };

  const decrement = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
      setPrice(price - 125);
    }
  };

  // These values is sent to content.jsx
  props.quantity(count);
  props.price(price);

  return (
    <div className="quantity">
      <button className="quantity-btn" onClick={decrement}>
        -
      </button>
      <div className="quantity-count">{count}</div>
      <button className="quantity-btn" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Quantity;
