import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Banner />
      <ProductList />
    </div>
  );
}

export default App;
