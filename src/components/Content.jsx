import React from "react";
import Button from "./Button";
import Quantity from "./Quantity";

function Content() {
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
        <Quantity />
        <Button />
      </div>
    </div>
  );
}

export default Content;
