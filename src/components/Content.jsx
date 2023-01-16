import React from "react";

function Content() {
  return (
    <div>
      <span aria-label="slogan">SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div>
        <div aria-describedby="discounted-price-tag">
          $125.00 <span>50%</span>
        </div>
        <div aria-describedby="original-price-tag">$250.00</div>
      </div>
    </div>
  );
}

export default Content;
