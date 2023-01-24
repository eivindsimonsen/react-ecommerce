import React, { useState, useContext, useEffect } from "react";
import profile from "../images/image-avatar.png";
import { CartContext } from "../App";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [showQuantityClass, setShowQuantityClass] = useState(false);

  const product = useContext(CartContext);
  console.log(product);

  useEffect(() => {
    if (product[0] > 0) {
      setShowQuantityClass(true);
    } else {
      setShowQuantityClass(false);
    }
  }, [product]);

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
          <div className="shopping-cart-container">
            <i onClick={showCart} className="fa-solid fa-cart-shopping"></i>
            <div className={showQuantityClass ? "shopping-cart-quantity" : ""}>{product[0]}</div>
          </div>

          <img onClick={showCart} src={profile} alt="User profile" />
          {toggleCart && (
            <div>
              <div>{product[0]}</div>
              <div>{product[1]}</div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
