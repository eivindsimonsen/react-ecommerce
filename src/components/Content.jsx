import React, { useState } from "react";
import Button from "./Button";
import Quantity from "./Quantity";

function Content({ setQuantityCart, setProductCart, setPriceCart }) {
  const [findCount, setFindCount] = useState();
  const [findPrice, setFindPrice] = useState();

  // Pulls data current count value from the quantity component
  const pullCount = (data) => {
    setFindCount(data);
  };

  // Pulls the current price value from the quantity component
  const pullPrice = (data) => {
    setFindPrice(data);
  };

  // On button click, adds item to cart, with data from quantity component
  function addToCart(item) {
    if (findCount > 0) {
      setQuantityCart(findCount);
      setProductCart(item);
      setPriceCart(findPrice);
    } else {
      setQuantityCart("");
      setPriceCart(0);
      setProductCart("Your cart is empty!");
    }
  }

  return (
    <div className="product-container">
      <div>
        <span aria-label="slogan">SNEAKER COMPANY</span>
      </div>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div>
        <div className="discounted-price-tag" aria-describedby="discounted-price-tag">
          $125.00 <span>50%</span>
        </div>
        <div className="original-price-tag" aria-describedby="original-price-tag">
          $250.00
        </div>
      </div>
      <div className="product-container-ctas">
        <Quantity quantity={pullCount} price={pullPrice} />
        <Button addToCart={addToCart} />
      </div>
    </div>
  );
}

export default Content;
