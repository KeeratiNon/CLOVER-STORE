import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const CategoryPage = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    setIsLoading(true);
    const results = await axios.get(
      `https://fakestoreapi.com/products/category/${params.category}`
    );
    setProducts(results.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [params.category]);
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-5">
      <h1 className="font-bold text-2xl">{params.category}</h1>
      <div className="flex flex-wrap w-[80%] gap-y-[40px] gap-x-5 pb-10">
        {isLoading ? (
          <div className="flex w-52 flex-col gap-4 p-4 ">
            <div className="skeleton h-40  w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ) : (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
