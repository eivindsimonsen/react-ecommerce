import Modal from "react-bootstrap/Modal";
import product_one from "../images/image-product-1.jpg";
import product_two from "../images/image-product-2.jpg";
import product_three from "../images/image-product-3.jpg";
import product_four from "../images/image-product-4.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

function ProductModal(props) {
  const [currentIndex, setCurrentIndex] = useState(props.startIndex);

  useEffect(() => {
    const thumbnails = document.querySelectorAll(".modal-thumbnail img");
    thumbnails.forEach((thumbnail, index) => {
      if (index === currentIndex) {
        thumbnail.classList.add("selected-thumbnail");
      } else {
        thumbnail.classList.remove("selected-thumbnail");
      }
    });
  }, [currentIndex]);

  const handleSelect = (index) => {
    props.updateStartIndex(index);
    setCurrentIndex(index);
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Carousel activeIndex={props.startIndex} slide={true} onSelect={handleSelect}>
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
        <div className="gallery-container-thumbnails modal-thumbnail">
          <div>
            <img className={currentIndex === 0 ? "selected-thumbnail" : ""} src={product_one} alt="A pair of shoes with an orange background" />
          </div>

          <div>
            <img className={currentIndex === 1 ? "selected-thumbnail" : ""} src={product_two} alt="A pair of shoes with an orange background" />
          </div>

          <div>
            <img className={currentIndex === 2 ? "selected-thumbnail" : ""} src={product_three} alt="A pair of shoes with an orange background" />
          </div>

          <div>
            <img className={currentIndex === 3 ? "selected-thumbnail" : ""} src={product_four} alt="A pair of shoes with an orange background" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProductModal;
