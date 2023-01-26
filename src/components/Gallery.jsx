import React, { useState, useRef, useEffect } from "react";
import product_one from "../../src/images/image-product-1.jpg";
import product_two from "../../src/images/image-product-2.jpg";
import product_three from "../../src/images/image-product-3.jpg";
import product_four from "../../src/images/image-product-4.jpg";
import ProductModal from "./Modal";
import Carousel from "react-bootstrap/Carousel";

function Gallery() {
  // States
  const [productImage, setProductImage] = useState(product_one);
  const [modalShow, setModalShow] = useState(false);
  const [startIndex, setStartIndex] = useState();

  const updateStartIndex = (index) => {
    setStartIndex(index);
  };

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

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-container-product">
          <img onClick={() => setModalShow(true)} src={productImage} alt="A pair of shoes with an orange background" />
          <div className="gallery-container-thumbnails">
            <div>
              <img
                ref={activeOne}
                onClick={(e) => {
                  setProductImage(e.target.src);
                  setStartIndex(0);
                }}
                src={product_one}
                alt="A pair of shoes with an orange background"
              />
            </div>

            <div>
              <img
                ref={activeTwo}
                onClick={(e) => {
                  setProductImage(e.target.src);
                  setStartIndex(1);
                }}
                src={product_two}
                alt="A pair of shoes with an orange background"
              />
            </div>

            <div>
              <img
                ref={activeThree}
                onClick={(e) => {
                  setProductImage(e.target.src);
                  setStartIndex(2);
                }}
                src={product_three}
                alt="A pair of shoes with an orange background"
              />
            </div>

            <div>
              <img
                ref={activeFour}
                onClick={(e) => {
                  setProductImage(e.target.src);
                  setStartIndex(3);
                }}
                src={product_four}
                alt="A pair of shoes with an orange background"
              />
            </div>
          </div>
        </div>
      </div>
      {/* show: a boolean that indicates if the modal should be visible or not.
          onHide: a callback function that will be called when the modal is closed, which sets the modalShow state to false
          startIndex: the index of the image that should be displayed first in the carousel when the modal is opened.
          updateStartIndex: a callback function that updates the startIndex state in the parent component, it will be called when the user selects a new slide in the carousel. */}
      <ProductModal show={modalShow} onHide={() => setModalShow(false)} startIndex={startIndex} updateStartIndex={updateStartIndex} />
      <Carousel className="mobile-carousel" slide={true}>
        <Carousel.Item>
          <img className="d-block w-100" src={product_one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={product_two} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={product_three} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={product_four} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Gallery;
