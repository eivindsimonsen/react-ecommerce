import Modal from "react-bootstrap/Modal";
import product_one from "../images/image-product-1.jpg";
import product_two from "../images/image-product-2.jpg";
import product_three from "../images/image-product-3.jpg";
import product_four from "../images/image-product-4.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

function ProductModal(props) {
  // Sets the initial value of currendindex state to what is passed down as the startIndex from the parent component (gallery.jsx)
  const [currentIndex, setCurrentIndex] = useState(props.startIndex);

  // This useEffect hook runs everytime the startIndex prop changes, it sets the currentIndex state with the updated prop value.
  useEffect(() => {
    setCurrentIndex(props.startIndex);
  }, [props.startIndex]);

  /* This block of code loops through each selected thumbnail, and checks if the index of the current thumbnail matches the currentIndex state. If it does, the "selected-thumbnail" class is added to the thumbnail element. If it doesn't match, the class is removed. This way, only the thumbnail image with the index matching the currentIndex state will have the "selected-thumbnail" class. */
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

  /* This function handleSelect takes an index argument and updates the startIndex state in the parent component by calling the updateStartIndex callback function passed down as a prop and also updates the currentIndex state. */
  const handleSelect = (index) => {
    props.updateStartIndex(index);
    setCurrentIndex(index);
  };

  /* This line renders the Carousel component and pass the startIndex prop as the activeIndex prop to the carousel. It also sets the slide prop to true, this means that when the carousel moves to the next or previous slide, it will slide into the new slide from the left or right respectively. It also pass the handleSelect function as the onSelect prop, which will be called when the user selects a new slide. */
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
