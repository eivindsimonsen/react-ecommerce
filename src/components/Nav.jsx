import React, { useState, useContext, useEffect } from "react";
import profile from "../images/image-avatar.png";
import { CartContext } from "../App";
import thumbnail from "../images/image-product-1-thumbnail.jpg";

function Nav({ setQuantityCart, setProductCart, setPriceCart }) {
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

  const deleteProduct = () => {
    setQuantityCart(null);
    setProductCart("Your cart is empty!");
    setPriceCart(null);
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
            <div className="basket">
              <div className="basket-grid-item-one">
                <div className="basket-title">Cart</div>
                <hr />
              </div>

              <div className="basket-grid-item-two">
                <img src={thumbnail} alt="Thumbnail" />

                <div className="basket-details">
                  {product[1]} <span className="basket-times">x</span> {product[0]} <span className="basket-price">${product[2]}</span>
                </div>

                <i onClick={deleteProduct} className="fa-solid fa-trash"></i>
              </div>
              <button className="cta basket-cta basket-grid-item-three">Checkout</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
