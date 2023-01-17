import "./sass/style.scss";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Content from "./components/Content";

function App() {
  return (
    <main>
      <Nav />
      <section className="wrapper">
        <Gallery />
        <Content />
      </section>
    </main>
  );
}

export default App;
