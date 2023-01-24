import React from "react";

function Button({ addToCart }) {
  return (
    <button onClick={() => addToCart("Fall Limited Edition Sneakers")} className="cta">
      <i className="fa-solid fa-cart-shopping"></i>
      Add to Cart
    </button>
  );
}

export default Button;
