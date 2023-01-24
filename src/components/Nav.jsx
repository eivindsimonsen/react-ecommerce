import React, { useState } from "react";
import profile from "../images/image-avatar.png";
import useLocalStorageValue from "../hooks/useLocalStorageValue";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [storedPrice] = useLocalStorageValue("price", "initialValue");
  const [storedQuantity] = useLocalStorageValue("quantity", null);
  const [storedProduct] = useLocalStorageValue("product", "initialValue");

  // Sets the state to true
  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const showCart = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <>
      <nav>
        <div className="grid-item-one">
          <i className="fa-solid fa-bars" onClick={toggleNav}></i>
          <div className="logo">sneakers</div>
          {/* If the state is true, add the active class, if false, empty string */}
          <ul className={isActive ? "active" : ""}>
            <i onClick={toggleNav} className="fa-solid fa-x"></i>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="grid-item-two">
          <i onClick={showCart} className="fa-solid fa-cart-shopping"></i>
          <div>{storedQuantity}</div>

          <img onClick={showCart} src={profile} alt="User profile" />
          {toggleCart && (
            <div>
              <div>{storedPrice}</div>
              <div>{storedQuantity}</div>
              <div>{storedProduct}</div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
