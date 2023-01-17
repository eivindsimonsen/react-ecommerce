import React from "react";
import profile from "../images/image-avatar.png";

function Nav() {
  return (
    <>
      <nav>
        <div className="grid-item-one">
          <div className="logo">sneakers</div>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="grid-item-two">
          <i className="fa-solid fa-cart-shopping"></i>
          <img src={profile} alt="User profile" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
