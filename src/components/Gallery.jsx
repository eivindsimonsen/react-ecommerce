import React from "react";
import product_one from "../../src/images/image-product-1.jpg";
import product_two from "../../src/images/image-product-1-thumbnail.jpg";
import product_three from "../../src/images/image-product-2-thumbnail.jpg";
import product_four from "../../src/images/image-product-3-thumbnail.jpg";
import product_five from "../../src/images/image-product-4-thumbnail.jpg";

function Gallery() {
  return (
    <div>
      <img src={product_one} alt="A pair of shoes with an orange background" />
      <img src={product_two} alt="A pair of shoes with an orange background" />
      <img src={product_three} alt="A pair of shoes with an orange background" />
      <img src={product_four} alt="A pair of shoes with an orange background" />
      <img src={product_five} alt="A pair of shoes with an orange background" />
    </div>
  );
}

export default Gallery;
