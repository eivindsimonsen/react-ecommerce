import "./sass/style.scss";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Content from "./components/Content";

import React, { useState } from "react";

export const CartContext = React.createContext();

function App() {
  const [quantity, setQuantity] = useState(null);
  const [product, setProduct] = useState("Your cart is empty!");

  return (
    <main>
      <CartContext.Provider value={[quantity, product]}>
        <Nav />
        <section className="wrapper">
          <Gallery />
          <Content setQuantityCart={setQuantity} setProductCart={setProduct} />
        </section>
      </CartContext.Provider>
    </main>
  );
}

export default App;
