import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const CategoryPage = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const results = await axios.get(
      `https://fakestoreapi.com/products/category/${params.category}`
    );
    console.log(results.data);
    setProducts(results.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-5">
      <h1 className="font-bold text-2xl">{params.category}</h1>
      <div className="flex flex-wrap w-[80%] gap-y-[40px] gap-x-5 pb-10">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
