import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className="flex flex-col items-center"
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Banner />
      <Categories />
      <ProductList />
    </div>
  );
}

export default App;
