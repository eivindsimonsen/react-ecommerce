import React, { useState, useRef, useEffect } from "react";
import product_one from "../../src/images/image-product-1.jpg";
import product_two from "../../src/images/image-product-2.jpg";
import product_three from "../../src/images/image-product-3.jpg";
import product_four from "../../src/images/image-product-4.jpg";
import ProductModal from "./Modal";

function Gallery() {
  // States
  const [productImage, setProductImage] = useState(product_one);
  const [modalShow, setModalShow] = useState(false);

  // Refs
  const activeOne = useRef(null);
  const activeTwo = useRef(null);
  const activeThree = useRef(null);
  const activeFour = useRef(null);

  // Everytime the product image changes, check for its src value. If the src value includes a thumbnail value, give active class.
  useEffect(() => {
    if (productImage.includes(product_one)) {
      activeOne.current.classList.add("selected-thumbnail");
    } else {
      activeOne.current.classList.remove("selected-thumbnail");
    }

    if (productImage.includes(product_two)) {
      activeTwo.current.classList.add("selected-thumbnail");
    } else {
      activeTwo.current.classList.remove("selected-thumbnail");
    }

    if (productImage.includes(product_three)) {
      activeThree.current.classList.add("selected-thumbnail");
    } else {
      activeThree.current.classList.remove("selected-thumbnail");
    }

    if (productImage.includes(product_four)) {
      activeFour.current.classList.add("selected-thumbnail");
    } else {
      activeFour.current.classList.remove("selected-thumbnail");
    }
  }, [productImage]);

  // Set product image to whatever thumbnail image is clicked.
  const changeImage = (e) => {
    setProductImage(e.target.src);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-container-product">
        <img onClick={() => setModalShow(true)} src={productImage} alt="A pair of shoes with an orange background" />
        <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
        <div className="gallery-container-thumbnails">
          <div>
            <img ref={activeOne} onClick={changeImage} src={product_one} alt="A pair of shoes with an orange background" />
          </div>

          <div>
            <img ref={activeTwo} onClick={changeImage} src={product_two} alt="A pair of shoes with an orange background" />
          </div>

          <div>
            <img ref={activeThree} onClick={changeImage} src={product_three} alt="A pair of shoes with an orange background" />
          </div>

          <div>
            <img ref={activeFour} onClick={changeImage} src={product_four} alt="A pair of shoes with an orange background" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
