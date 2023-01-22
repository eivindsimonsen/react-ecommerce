import React, { useState } from "react";
import profile from "../images/image-avatar.png";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav>
        <div className="grid-item-one">
          <i className="fa-solid fa-bars" onClick={toggleNav}></i>
          <div className="logo">sneakers</div>
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
          <i className="fa-solid fa-cart-shopping"></i>
          <img src={profile} alt="User profile" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
