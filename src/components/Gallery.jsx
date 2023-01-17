import React from "react";
import product_one from "../../src/images/image-product-1.jpg";
import product_two from "../../src/images/image-product-1-thumbnail.jpg";
import product_three from "../../src/images/image-product-2-thumbnail.jpg";
import product_four from "../../src/images/image-product-3-thumbnail.jpg";
import product_five from "../../src/images/image-product-4-thumbnail.jpg";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-container-product">
        <img src={product_one} alt="A pair of shoes with an orange background" />
        <div className="gallery-container-thumbnails">
          <div className="thumbnail-one">
            <img src={product_two} alt="A pair of shoes with an orange background" className="selected-thumbnail" />
            <div className="thumbnail-one-overlay"></div>
          </div>

          <div className="thumbnail-two">
            <img src={product_three} alt="A pair of shoes with an orange background" />
            <div className="thumbnail-two-overlay"></div>
          </div>

          <div className="thumbnail-three">
            <img src={product_four} alt="A pair of shoes with an orange background" />
            <div className="thumbnail-three-overlay"></div>
          </div>

          <div className="thumbnail-four">
            <img src={product_five} alt="A pair of shoes with an orange background" />
            <div className="thumbnail-four-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
