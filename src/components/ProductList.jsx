import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

const ProductList = () => {
  const [showProducts, setShowProduct] = useState([]);
  const getProductData = async () => {
    try {
      const results = await axios.get(
        "https://fakestoreapi.com/products?&offset=0&limit=10"
      );
      // console.log(results.data);
      setShowProduct(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="flex w-[80%] flex-wrap gap-y-[40px] pb-10">
      {showProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
