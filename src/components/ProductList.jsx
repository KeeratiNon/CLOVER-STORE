import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

const ProductList = () => {
  const [showProducts, setShowProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const mockup = Array.from(Array(8).keys());
  console.log(mockup);
  const getProductData = async () => {
    try {
      setIsLoading(true);
      const results = await axios.get(
        "https://fakestoreapi.com/products?&offset=0&limit=10"
      );
      // console.log(results.data);
      setShowProduct(results.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="flex w-[80%] flex-wrap justify-center gap-y-[40px] gap-x-5 py-10 ">
      {isLoading ? (
        <div className="flex flex-row flex-wrap gap-5 w-[80%] justify-between">
          {mockup.map(() => {
            return (
              <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            );
          })}
        </div>
      ) : (
        showProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
