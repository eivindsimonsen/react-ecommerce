import React, { useState } from "react";

function Quantity() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

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
