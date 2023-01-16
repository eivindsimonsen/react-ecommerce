import "./sass/style.scss";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Button from "./components/Button";
import Quantity from "./components/Quantity";

function App() {
  return (
    <main>
      <Nav />
      <Gallery />
      <Content />
      <Button />
      <Quantity />
    </main>
  );
}

export default App;
