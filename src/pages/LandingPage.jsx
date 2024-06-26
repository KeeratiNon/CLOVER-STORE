import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <ProductList />
    </div>
  );
};

export default LandingPage;
