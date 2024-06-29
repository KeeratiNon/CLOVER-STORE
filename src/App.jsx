import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import { useState } from "react";
import ProductInfo from "./pages/ProductInfo";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <div data-theme={isDarkMode ? "dark" : "light"} className="flex flex-col items-center">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products/category/:category"
            element={<CategoryPage />}
          />
          <Route
            path="/product/:id"
            element={<ProductInfo isDarkMode={isDarkMode} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
